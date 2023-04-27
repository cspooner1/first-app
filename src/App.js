import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from "./data.json";
import Logo from './Logo';
import { GiHornedSkull } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">
        <Logo />

        <h1 style={{ fontFamily: "fantasy", fontSize: "125px", color:"sandybrown"}}><GiHornedSkull />GALLERY OF HORNS<GiHornedSkull /></h1>
      </header>

      <Main />
      <Footer></Footer>
      <link rel="stylesheet" href="Main.css"></link>
    </div>
  );
}

export default App;
