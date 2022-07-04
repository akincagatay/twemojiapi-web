import './App.css';
import {useState, useEffect} from "react";


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://twemoji-api.herokuapp.com/v1/allData/category/smileys & emotion")
        .then(res => res.json())
        .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
        )
  })
  return(
      <div>
        <div className="topNav">
          <div className="leftNav">
            <label>Twemoji API</label>
          </div>
          <div className="rightNav">
            <a href="">Documentation</a>
            <a href="">Emojis</a>
          </div>
        </div>
        <div className="body">
          <div className="box">
            {items.map(item => (
                <div className="card">
                  <img src={item.svg} alt="SVG as an image" width="50" height="50"/>
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default App;
