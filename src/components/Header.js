import {Link} from "react-router-dom";
import './Header.css'
import Emojis from "../Emojis";

function Header(){
    return(
        <div className="topNav">
            <div className="leftNav">
                <label className="logoLabel">Twemoji API</label>
            </div>
            <div className="rightNav">
                <Link to="../Documentation">Documentation</Link>
                <Link to="../Emojis">Emojis</Link>
            </div>
        </div>
    )
}

export default Header;