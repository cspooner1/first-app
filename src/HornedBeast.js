import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs'
import { click } from '@testing-library/user-event/dist/click';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function HornedBeast(props) {
  const [clicks, setClicks] = useState(0);
  //This is where i'm adding up the amount fo times a image is clicked.
  const onclick = () => {
    setClicks(clicks + 1);
    //This function is how my heart icon works. It basically says when false my icon will be black ,but when it's true the icon will turn purple.
    const handleClick = () => {
      setClicks(!clicks);
    }
  };
  const [zoom, setZoom] = useState(false);
  //Here i'm saying when the button is in its default value it is false so nothing happens, but when the value changes to true the images modal pops up.
  const handleClose = () => setZoom(false);
  const handleZoom = () => setZoom(true);

  //Here is i've created a container containing my HornedBeast component in the form of a card.
  return (
    <div>
      <Card style={{ width: '19.4rem', marginTop: "10%", borderStyle: "solid", borderWidth: "5px", overflow: "hidden", borderRadius: "10px", height: "30rem", fontSize: "12px" }}>
        <Card.Title >{props.title}</Card.Title>
        <Card.Img alt={props.alt} src={props.imageUrl} style={{ width: "300px", height: "300px" }} icon={BsFillHeartFill} />
        <Card.Body>
          <Card.Text >{props.description}</Card.Text>
          {clicks} <Button variant="primary" onClick={onclick}
            style={{ marginBottom: "10px", marginTop: "10px", backgroundColor: clicks ? "purple" : "black" }}><BsFillHeartFill />
          </Button>
          <Button variant="secondary" onClick={handleZoom}>View Image</Button>
          <Modal show={zoom} onHide={handleClose} style={{ justifycontent: "center" }}>
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
              <Card className="App">
                <Card.Title >{props.title}</Card.Title>
                <Card.Img alt={props.alt} src={props.imageUrl} style={{ width: "300px", height: "300px", marginLeft:"18%" }} icon={BsFillHeartFill} />
                <Card.Body>
                  <Card.Text >{props.description}</Card.Text>
                  {clicks} <Button variant="primary" onClick={onclick}
                    style={{ marginBottom: "10px", marginTop: "15px", backgroundColor: clicks ? "purple" : "black" }}><BsFillHeartFill />
                  </Button>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Shrink
              </Button>
            </Modal.Footer>
          </Modal>
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