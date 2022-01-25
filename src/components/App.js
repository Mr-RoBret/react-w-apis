import React, { useState } from "react";
import './App.css';
import News from './News/News';
import Selector from './Dropdown/Selector';

function App() {

  const [apiUrl, setApiUrl] = useState("https://newsapi.org/v2/top-headlines?country=us&apiKey=dc575b5e0863400aacc7c1c5e409b6b7");
  
  // const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=dc575b5e0863400aacc7c1c5e409b6b7';
  
  const handleSelection = (event) => {
    console.log('we have reached the event handler');
    // console.log(`https://newsapi.org/v2/top-headlines?${selection}&apiKey=dc575b5e0863400aacc7c1c5e409b6b7`);
    // return `https://newsapi.org/v2/top-headlines?${selection}&apiKey=dc575b5e0863400aacc7c1c5e409b6b7`;
    // setApiUrl(newUrl);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Bret's News Feed</h1>
        <p>Choose your News</p>  
      </header>
      <Selector apiURL={apiUrl} onChange={handleSelection} />
      <News apiURL={apiUrl} />
    </div>
  );
}

export default App;
