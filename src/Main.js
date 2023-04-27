import logo from './logo.svg';
import HornedBeast from './HornedBeast';
import data from "./data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BsLink from 'react-icons/bs';
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function Main() {
    //Here i've created a container for my horned beast components. 
    //This is also how i'm targetting each image so it can render on my page. The first 4 are how I target an Image if I just want to use the link.
    //The rest are how I target Images the are in an Array.
    const [horns, setHorns] = useState("undefined")
    let filteredArray = data.filter(function(element){
       // console.log('Element Data',element)
       console.log(horns)
        if (element.horns == horns || horns === "undefined"){
            return true
        }else{
            return false
        }
        

    })
    return (
   <>
            <Form.Group style={{width:"30%", marginLeft:"35%"}}>
                <Form.Label>Horned Beast</Form.Label>
                <Form.Select onChange={function(event){
                    setHorns(event.target.value)
                }}>
                    <option value={"undefined"}>All Horned Beast</option>
                    <option value={1}> 1 Horned Beast</option>
                    <option value={2}> 2 Horned Beast</option>
                    <option value={3}> 3 Horned Beast</option>
                    <option value={100}> 100 Horned Beast</option>
                </Form.Select>
            </Form.Group>
                 <div className='container'>
            {/* <HornedBeast imageUrl="HornedBeast.jpg" title="Dragon" description="A dragon standing on top of a mountain." horns="24" />
            <HornedBeast imageUrl="Wendigo.jpg" title="Wendigo" description="A wendigo standing in a snowy plateau." horns="" />
            <HornedBeast imageUrl="Chimera.jpg" title="Chimera" description="A chimera standing on a rock structure." horns="2" />
            <HornedBeast imageUrl="Demon.jpg" title="Demon" description="A Demon getting ready to take your soul" horns="2" /> */}

            {filteredArray.map(value => {

                return (
                    <div>
                        <HornedBeast
                            imageUrl={value.image_url}
                            title={value.title}
                            description={value.description}
                            horns={value.horns}
                            id={value.id} />
                    </div >
                )
            })}
        
        </div>
        </>

    )
}


export default Main;
