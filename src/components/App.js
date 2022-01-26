import React, { useState } from "react";
import './App.css';
import News from './News/News';
import Selector from './Dropdown/Selector';

function App() {

  const [apiUrl, setApiUrl] = useState("https://newsapi.org/v2/top-headlines?country=us&apiKey=dc575b5e0863400aacc7c1c5e409b6b7");
  
  // const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=dc575b5e0863400aacc7c1c5e409b6b7';
  
  // const handleSelection = value => () => {
  //   console.log('we have reached the event handler');
  //   let domainName = {value}
  //   let newUrl = `https://newsapi.org/v2/everything?${domainName}&apiKey=dc575b5e0863400aacc7c1c5e409b6b7`
  //   setApiUrl(newUrl);
  // }
  
  const handleSelection = (event) => {
    console.log('we have reached the event handler');
    let domainName = {event}
    let newUrl = `https://newsapi.org/v2/everything?${domainName}&apiKey=dc575b5e0863400aacc7c1c5e409b6b7`
    setApiUrl(newUrl);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Bret's News Feed</h1>
        <p>Choose your News</p>  
      </header>
      <Selector 
        apiURL={apiUrl} 
        onClick={handleSelection}
        />
      <News apiURL={apiUrl} />
    </div>
  );
}

export default App;
