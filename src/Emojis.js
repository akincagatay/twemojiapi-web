import {useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Emojis.css"


function Emojis()
{
    const [items, setItems] = useState([]);
    const [isBoxView,setIsBoxView] = useState(true);
    const [isClicked,setIsClicked] = useState(false);
    const [isCopied,setIsCopied] = useState(false);
    const [buttonText, setButtonText] = useState("Categories");
    const [clickedName, setClickedName] = useState();
    const [clickedUnicode, setClickedUnicode] = useState();
    const [clickedHex, setClickedHex] = useState();
    const [clickedSVG, setClickedSVG] = useState();
    const [clickedPNG, setClickedPNG] = useState();
    const changeView = (bool) =>{
        setIsBoxView(bool)
    }
    const changeClick = (bool) =>{
        setIsClicked(bool)
    }
    const getClickedItem = (name,unicode,hex,svg,png)=>{
        setClickedName(name)
        setClickedUnicode(unicode)
        setClickedHex(hex)
        setClickedSVG(svg)
        setClickedPNG(png)
    }
    const changeText = (text) => setButtonText(text);

    const changeCopy=() =>{
        setIsCopied(true);

        setTimeout(()=> setIsCopied(false),1000)


    }


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

            <Header/>
            <div className="body">
                <div className="categoryBox">
                    <div className="dropdown">
                        <button className="dropbtn">{buttonText}</button>
                        <div className="dropdown-content">
                            <label onClick={()=>{getApiData("smileys-emotions"); changeText("Smileys & Emotions")}}>Smileys & Emotions</label>
                            <label onClick={()=>{getApiData("flags"); changeText("Flags")}}>Flags</label>
                        </div>
                    </div>
                    <div className="boxIcon" onClick={()=>changeView(true)}>
                        <div className="squareBox"></div>
                        <div className="squareBox"></div>
                        <div className="squareBox"></div>
                        <div className="squareBox"></div>
                    </div>
                    <div className="listIcon" onClick={()=>changeView(false)}>
                        <div className="rectangleBox"></div>
                        <div className="rectangleBox"></div>
                        <div className="rectangleBox"></div>
                        <div className="rectangleBox"></div>
                    </div>
                </div>
                {isBoxView ?
                    <div className="box">
                        {isClicked &&
                            <div className="selectedCard">
                                <div className="selectedFirstLine">
                                    <div className="selectedFLLeft">
                                    <label>Name :</label>
                                    <label onClick={() => {navigator.clipboard.writeText(clickedName); changeCopy()}}>{!isCopied ? clickedName : "COPIED"}</label>
                                    </div>
                                    <img className="selectedFLRight" onClick={()=>changeClick(false)} src="https://twemoji.maxcdn.com/v/latest/svg/274c.svg" width="22px" height="22px"/>
                                </div>

                                <label>Unicode: {clickedUnicode}</label>
                                <label>Hex:{clickedHex}</label>
                                <a href={clickedSVG}>SVG</a>
                                <a href={clickedPNG}>PNG</a>
                            </div>
                        }
                        {items.map(item => (
                            <div className="card">
                                <img className="imgCard"  onClick={()=>{changeClick(true);getClickedItem(item.name,item.unicode,item.hex,item.svg,item.png)}} src={item.svg} width="50px" height="50px"/>

                            </div>
                        ))}


                    </div>
                    :
                    <div className="tableView">
                        {isCopied &&
                            <div className="copyMessage">
                                <label>COPIED</label>
                            </div>}
                        <table className="table">

                            {items.map(item => (

                                <tr>
                                    <td><label className="tdLabel" onClick={() => { navigator.clipboard.writeText(item.name); changeCopy()}}>{item.name}</label></td>
                                    <td><label className="unicodeLabel" onClick={() => { navigator.clipboard.writeText(item.unicode); changeCopy()}}>{item.unicode}</label></td>
                                    <td><label className="tdLabel" onClick={() => { navigator.clipboard.writeText(item.hex); changeCopy()}}>{item.hex}</label></td>
                                    <td><label className="tdLabel" onClick={() => { navigator.clipboard.writeText(item.svg); changeCopy()}}>SVG</label></td>
                                    <td><label className="tdLabel" onClick={() => { navigator.clipboard.writeText(item.png); changeCopy()}}>PNG</label></td>
                                </tr>

                            ))}

                        </table>

                    </div>
                }
            </div>
            <Footer/>
        </div>

    )
}

export default Emojis;