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
    const [labelSVG, setLabelSVG] = useState();
    const [labelPNG, setLabelPNG] = useState();
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
        setLabelSVG("SVG")
        setClickedPNG(png)
        setLabelPNG("PNG")
    }
    const changeButtonText = (text) => setButtonText(text);

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
                            <label onClick={()=>{getApiData("smileys-emotions"); changeButtonText("Smileys & Emotions")}}>Smileys & Emotions</label>
                            <label onClick={()=>{getApiData("flags"); changeButtonText("Flags")}}>Flags</label>
                            <label onClick={()=>{getApiData("people-body"); changeButtonText("People & Body")}}>People & Body</label>
                            <label onClick={()=>{getApiData("animals-nature"); changeButtonText("Animals & Nature")}}>Animals & Nature"</label>
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
                                <div className="selectedCardLeft">
                                    <img src={clickedSVG} width="100px" height="100px"/>
                                </div>
                                <div className="selectedCardRight">
                                    <div className="selectedFirstLine">
                                        <div className="selectedFLLeft">
                                            <label>Name :</label>
                                            <label onClick={() => {navigator.clipboard.writeText(clickedName); setClickedName("COPIED");setTimeout(()=>setClickedName(clickedName),1000)}}>{clickedName}</label>
                                        </div>
                                        <img className="selectedFLRight" onClick={()=>changeClick(false)} src="https://twemoji.maxcdn.com/v/latest/svg/274c.svg" width="22px" height="22px"/>
                                    </div>
                                    <div className="selectedSecondLine">
                                        <label>Unicode:</label>
                                        <label onClick={()=> {navigator.clipboard.writeText(clickedUnicode); setClickedUnicode("COPIED");setTimeout(()=>setClickedUnicode(clickedUnicode),1000)}}> {clickedUnicode}</label>
                                    </div>
                                    <div className="selectedThirdLine">
                                        <label>Hex:</label>
                                        <label onClick={()=> {navigator.clipboard.writeText(clickedHex); setClickedHex("COPIED"); setTimeout(()=>setClickedHex(clickedHex),1000)}}>{clickedHex}</label>
                                    </div>
                                    <div className="selectedLinks">
                                        <label onClick={()=> {navigator.clipboard.writeText(clickedSVG); setLabelSVG("COPIED"); setTimeout(()=>setLabelSVG("SVG"),1000)}}>{labelSVG}</label>
                                        <label onClick={()=> {navigator.clipboard.writeText(clickedPNG); setLabelPNG("COPIED"); setTimeout(()=>setLabelPNG("PNG"),1000)}}>{labelPNG}</label>
                                    </div>
                                </div>

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