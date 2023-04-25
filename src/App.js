import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from"./data.json";
import Logo from './Logo';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <header className="App-header">
        <Logo/>
        
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
        <p>GALLERY OF HORNS</p>
       </header> 
      <Main/>
      <Footer></Footer>
      <link rel="stylesheet" href="Main.css"></link>
    </div>
  );
}

export default App;
