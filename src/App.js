import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from"./data.json";

function App() {
  return (
    <div className="App">
      <Header/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to 301!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       </header> 
      <Main/>
      <Footer></Footer>
      <link rel="stylesheet" href="Main.css"></link>
    </div>
  );
}

export default App;
