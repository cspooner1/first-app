import logo from './logo.svg';
import './App.css';

function HornedBeast(props) {
  return (
  <div>
  <h2>{props.title}</h2>
  <img alt={props.alt} src={props.imageUrl} title={props.title}></img>
  <p>{props.description}</p>
  {/* <h2>Wendigo</h2>
  <img alt="Wendigo" src="Wendigo.jpg"></img>
  <p>A wendigo standing in a snowy plateau</p> */}
  </div>
  );
}

export default HornedBeast;
