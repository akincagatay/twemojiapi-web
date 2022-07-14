import './Documentation.css';
import {useState, useEffect} from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";



function Documentation() {
    return(
        <div>
            <Header/>
            <div className="documentationBody">
                <div className="leftBody">
                    <div className="textPlace">
                        <h1>What is Twemoji API?</h1>
                        <p>Twemoji is an API that you can get Twitter Emojis easily. Twitter API returns Emoji names,
                            unicodes, hex, svg and png links.</p>

                    </div>
                </div>
                <div className="rightBody">
                    <div className="textPlace">
                        <h1>Example</h1>
                        <h1>All Links</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Documentation;
