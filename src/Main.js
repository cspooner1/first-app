import logo from './logo.svg';
import './App.css';
import HornedBeast from './HornedBeast';
function Main() {
  return(
    <div>
  <HornedBeast imageUrl="HornedBeast.jpg" title="Dragon" description="A dragon standing on top of a mountain."/>
  <HornedBeast imageUrl="Wendigo.jpg" title="Wendigo" description="A wendigo standing in a snowy plateau."/>
  <HornedBeast imageUrl="Chimera.jpg" title="Chimera" description="A chimera standing on a rock structure."/>
  </div>
    )
}

export default Main;
