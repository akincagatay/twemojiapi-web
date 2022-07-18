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
                        <p>Twemoji is an API that you can get Twitter Emojis easily.Twitter API returns Emoji names,
                            unicodes, hex, svg and png links.</p>
                        <p>You can find all source codes on <a href="https://github.com/akincagatay">GitHub</a></p>
                        <h1>How Routes Works?</h1>
                        <p>You can get all data with Twemoji API. Also you can only get svg/png url or emoji's unicode/hex.</p>
                        <p>There are 4 different route URLs.

                            <ul>
                                <li>"/name/:name" returns the emoji with the responded name.</li>
                                <li>"/similarname/:similarname" returns all emojis with the containing word/name.</li>
                                <li>"/category/:category" returns all emojis with the requested category.</li>
                                <li>"/subcategory/:subcategory" returns all emojis with the requested sub category.</li>
                            </ul>
                        </p>

                        <h1>Help Me!</h1>
                        <p>Please let me know if you find any error. <a href="mailto:akincagataycaliskan@gmail.com">Contact me</a> if you have any ideas to improve this API.</p>
                        <h1>Do you want to support me?</h1>
                        <p>If you wish, you can support me to reach my dreams or just help me to survive.</p>

                    </div>
                </div>
                <div className="rightBody">
                    <div className="textPlace">
                        <h1>Routes</h1>
                        <ul> All Data Routes
                            <li>https://twemoji-api.herokuapp.com/v1/allData</li>
                            <li>https://twemoji-api.herokuapp.com/v1/name/:name</li>
                            <li>https://twemoji-api.herokuapp.com/v1/similarname/:similarname</li>
                            <li>https://twemoji-api.herokuapp.com/v1/category/:category</li>
                            <li>https://twemoji-api.herokuapp.com/v1/subcategory/:subcategory</li>
                        </ul>
                        <ul> SVG Routes
                            <li>https://twemoji-api.herokuapp.com/v1/svg/:name</li>
                            <li>https://twemoji-api.herokuapp.com/v1/svg/similarname/:similarname</li>
                            <li>https://twemoji-api.herokuapp.com/v1/svg/category/:category</li>
                            <li>https://twemoji-api.herokuapp.com/v1/svg/subcategory/:subcategory</li>
                        </ul>
                        <ul> PNG Routes
                            <li>https://twemoji-api.herokuapp.com/v1/png/:name</li>
                            <li>https://twemoji-api.herokuapp.com/v1/png/similarname/:similarname</li>
                            <li>https://twemoji-api.herokuapp.com/v1/png/category/:category</li>
                            <li>https://twemoji-api.herokuapp.com/v1/png/subcategory/:subcategory</li>
                        </ul>
                        <ul> Unicode Routes
                            <li>https://twemoji-api.herokuapp.com/v1/unicode/:name</li>
                            <li>https://twemoji-api.herokuapp.com/v1/unicode/similarname/:similarname</li>
                            <li>https://twemoji-api.herokuapp.com/v1/uncode/category/:category</li>
                            <li>https://twemoji-api.herokuapp.com/v1/unicode/subcategory/:subcategory</li>
                        </ul>
                        <ul> PNG Routes
                            <li>https://twemoji-api.herokuapp.com/v1/hex/:name</li>
                            <li>https://twemoji-api.herokuapp.com/v1/hex/similarname/:similarname</li>
                            <li>https://twemoji-api.herokuapp.com/v1/hex/category/:category</li>
                            <li>https://twemoji-api.herokuapp.com/v1/hex/subcategory/:subcategory</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Documentation;
