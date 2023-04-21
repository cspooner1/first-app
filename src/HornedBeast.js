import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BsFillHeartFill} from 'react-icons/bs'
import { click } from '@testing-library/user-event/dist/click';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function HornedBeast(props) {
const [clicks, setClicks] = useState(0);
const onclick= () => {setClicks(clicks + 1); 
const handleClick = () => {
  setClicks(!clicks);
}}; 

  return(
  <div>
     <Card style={{ width: '18rem', marginBottom:"10%", borderStyle:"solid", borderWidth:"5px", overflow:"hidden", borderRadius:"10px", height:"30rem"}}>
     <Card.Title >{props.title}</Card.Title>
      <Card.Img alt={props.alt} src={props.imageUrl} style={{width:"300px", height:"300px"}} icon={BsFillHeartFill}/>
      <Card.Body>
        <Card.Text >{props.description}</Card.Text>
        {clicks} <Button  variant ="primary" onClick={onclick}
        style={{ marginBottom:"10px", marginTop:"15px" ,backgroundColor: clicks ? "purple" : "black"}}><BsFillHeartFill/>
        </Button>
      </Card.Body>
    </Card>
  {/* <h2>{props.title}</h2>
  <img alt={props.alt} src={props.imageUrl} title={props.title} style={{width:"400px", height:"400px" }} icon={BsFillHeartFill }></img>
  <p>{props.description}</p> */}
  {/* {clicks}  <button  onClick={onclick}
        style={{ backgroundColor: clicks ? "purple" : "black" }}><BsFillHeartFill/></button> */}
  </div>
  )
}

export default HornedBeast;