import './App.css';
import {useState, useEffect} from "react";
import listview from "./listview.svg"
import boxview from "./boxview.svg"

function App(props) {

    const [items, setItems] = useState([]);
    const [isBoxView,setIsBoxView] = useState(true);
    const [buttonText, setButtonText] = useState("Categories"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

    const changeBool = (bool) =>{
        setIsBoxView(bool)
    }
    const changeText = (text) => setButtonText(text);

    const getApiData = async (category) => {
        const response = await fetch(
            "https://twemoji-api.herokuapp.com/v1/allData/category/"+category
        ).then((response) => response.json());

        setItems(response);
    };
    useEffect(() => {
      getApiData("smileys-emotions")
    },[])


    return(
        <div>
            <div className="topNav">
                  <div className="leftNav">
                      <label className="logoLabel">Twemoji API</label>
                  </div>
                  <div className="rightNav">
                      <a href="">Documentation</a>
                      <a href="">Emojis</a>
                  </div>
            </div>
            <div className="body">
                <div className="selectMenu">
                <div className="dropdown">
                    <button className="dropbtn">{buttonText}</button>
                    <div className="dropdown-content">
                        <label onClick={()=>{getApiData("smileys-emotions"); changeText("Smileys & Emotions")}}>Smileys & Emotions</label>
                        <label onClick={()=>{getApiData("flags"); changeText("Flags")}}>Flags</label>
                    </div>
                </div>
                    <div className="boxIcon" onClick={()=>changeBool(true)}>
                        <div className="squareBox"></div>
                        <div className="squareBox"></div>
                        <div className="squareBox"></div>
                        <div className="squareBox"></div>
                    </div>
                    <div className="listIcon" onClick={()=>changeBool(false)}>
                        <div className="rectangleBox"></div>
                        <div className="rectangleBox"></div>
                        <div className="rectangleBox"></div>
                        <div className="rectangleBox"></div>
                    </div>
            </div>
                {isBoxView ?
                    <div className="box">
                        {items.map(item => (
                            <div className="card">
                                <img className="imgCard" src={item.svg} width="50px" height="50px"/>
                            </div>
                        ))}
                    </div>
                    :
                    <div class="tableView">
                        <table className="tableView">
                            {items.map(item => (

                                <tr>
                                    <td><label className="tdLabel">{item.name}</label></td>
                                    <td><label className="tdLabel">{item.unicode}</label></td>
                                    <td><label className="tdLabel">{item.hex}</label></td>
                                    <td><label className="tdLabel" onClick={() =>  navigator.clipboard.writeText(item.svg)}>SVG</label></td>
                                    <td><label className="tdLabel" onClick={() =>  navigator.clipboard.writeText(item.png)}>PNG</label></td>
                                </tr>

                            ))}
                        </table>
                    </div>
                }
        </div>
            <div className="footer">

                <a className="buyCoffee" target="_blank" href="https://www.buymeacoffee.com/akincagatay">
                    <img  className="imgCoffee" src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" width="200px" height="40px" />

                </a>

            </div>
        </div>

      )
}

export default App;
