import React, { useState } from "react";
import './App.css';
import News from './News/News';
import Selector from './Dropdown/Selector';
import NewSingle from "./News/NewSingle";

function App() {

  const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=dc575b5e0863400aacc7c1c5e409b6b7';

  const [newsSource, setNewsSource] = useState(apiUrl);
  const [filteredNews, setFilteredNews] = useState([]);

  // useEffect(() => {
  //     fetch(apiUrl,
  //         {    
  //             method: "GET",
  //         })
  //         .then((response) => response.json()) 
  //         .then((data) => setFilteredNews(data.articles))
  //         .catch(error => console.log(error));
  // }, [newsSource]);
  
  const handleNewUrl = (event) => {
    let domainName = event.target.value;
    console.log(domainName);
    let newUrl = `https://newsapi.org/v2/everything?${domainName}&apiKey=dc575b5e0863400aacc7c1c5e409b6b7`
    setNewsSource(newUrl);
  }

  const populateNews = (filteredNews) => {
    filteredNews.map((item) => (
    <NewSingle key={item.url} item={item} />
    ))
  }

  const handleFilteredList = (event) => {
    setFilteredNews(populateNews(event.target.data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Bret's News Feed</h1>
        <p>Choose your News</p>  
      </header>
      <Selector 
        newsArr={filteredNews} 
        onClick={handleNewUrl}
        />
      <News newURL={newsSource} onFilter={handleFilteredList} />
      
    </div>
  );
}

export default App;
