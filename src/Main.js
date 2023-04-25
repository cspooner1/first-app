import logo from './logo.svg';
// import './App.css';
import HornedBeast from './HornedBeast';
import data from "./data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsLink } from 'react-icons/bs';
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Main() {
  //Here i've created a container for my horned beast components. 
  //This is also how i'm targetting each image so it can render on my page. The first 4 are how I target an Image if I just want to use the link.
  //The rest are how I target Images the are in an Array.
  return (
    <div className='container'>
      <HornedBeast imageUrl="HornedBeast.jpg" title="Dragon" description="A dragon standing on top of a mountain." />
      <HornedBeast imageUrl="Wendigo.jpg" title="Wendigo" description="A wendigo standing in a snowy plateau." />
      <HornedBeast imageUrl="Chimera.jpg" title="Chimera" description="A chimera standing on a rock structure." />
      <HornedBeast imageUrl="Demon.jpg" title="Demon" description="A Demon getting ready to take your soul" />
      <HornedBeast imageUrl={data[0].image_url} title={data[0].title} description={data[0].description} />
      <HornedBeast imageUrl={data[1].image_url} title={data[1].title} description={data[1].description} />
      <HornedBeast imageUrl={data[2].image_url} title={data[2].title} description={data[2].description} />
      <HornedBeast imageUrl={data[3].image_url} title={data[3].title} description={data[3].description} />
      <HornedBeast imageUrl={data[4].image_url} title={data[4].title} description={data[4].description} />
      <HornedBeast imageUrl={data[5].image_url} title={data[5].title} description={data[5].description} />
      <HornedBeast imageUrl={data[6].image_url} title={data[6].title} description={data[6].description} />
      <HornedBeast imageUrl={data[7].image_url} title={data[7].title} description={data[7].description} />
      <HornedBeast imageUrl={data[8].image_url} title={data[8].title} description={data[8].description} />
      <HornedBeast imageUrl={data[9].image_url} title={data[9].title} description={data[9].description} />
      <HornedBeast imageUrl={data[10].image_url} title={data[10].title} description={data[10].description} />
      <HornedBeast imageUrl={data[11].image_url} title={data[11].title} description={data[11].description} />
      <HornedBeast imageUrl={data[12].image_url} title={data[12].title} description={data[12].description} />
      <HornedBeast imageUrl={data[13].image_url} title={data[13].title} description={data[13].description} />
      <HornedBeast imageUrl={data[14].image_url} title={data[14].title} description={data[14].description} />
      <HornedBeast imageUrl={data[15].image_url} title={data[15].title} description={data[15].description} />
      <HornedBeast imageUrl={data[16].image_url} title={data[16].title} description={data[16].description} />
      <HornedBeast imageUrl={data[17].image_url} title={data[17].title} description={data[17].description} />
      <HornedBeast imageUrl={data[18].image_url} title={data[18].title} description={data[18].description} />
      <HornedBeast imageUrl={data[19].image_url} title={data[19].title} description={data[19].description} />
</div >
  )
}


export default Main;
