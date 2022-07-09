import "./App.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Documentation from "./Documentation";
import Emojis from "./Emojis";

function App()
{
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    <Route exact path="/" element={<Documentation/>}/>
                    <Route path="/documentation" element={<Documentation/>} />
                    <Route path="/emojis" element={<Emojis/>} />

                </Routes>
            </Router>
        </>
    );
}

export default App;