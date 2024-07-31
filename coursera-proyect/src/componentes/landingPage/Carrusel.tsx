import Carousel from 'react-bootstrap/Carousel';
import myimage from '../imagenes/Example.png';

function Slider() {
  return (
    <Carousel className="mx-5">

      <Carousel.Item>
        <CardSlider />
        <Carousel.Caption>34
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CardSlider />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;


import Card from 'react-bootstrap/Card';

function CardSlider() {
  return (
    <Card className="bg-dark text-white w-auto" style={{height:"300px"}}>
      <Card.Img src={myimage} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>LOREM IMPSUM</Card.Title>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Similique non esse in sit saepe voluptatibus doloremque enim
           dicta velit placeat, deserunt maxime magni ipsam?
            Vel veniam nam mollitia ad esse?
          </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
