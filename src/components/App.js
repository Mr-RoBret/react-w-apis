import './App.css';
import News from './News/News';
import Selector from './Dropdown/Selector';

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=dc575b5e0863400aacc7c1c5e409b6b7'

const selectedSource = (selection) => {
  return `https://newsapi.org/v2/top-headlines?${selection}&apiKey=dc575b5e0863400aacc7c1c5e409b6b7`
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Bret's News Feed</h1>
        <p>Choose your News</p>  
      </header>
      <Selector apiURL={url} />
      <News selected={selectedSource} />
    </div>
  );
}

export default App;
