import './App.css';
import News from './News/News';
import Selector from './Selector';

function App() {
  const urlType = "everything?domains=wsj.com";

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Bret's News Feed</h1>
        <p>Choose your News</p>  
      </header>
      <Selector />
      <News types={urlType} />
    </div>
  );
}

export default App;
