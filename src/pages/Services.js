import Carousel from 'react-bootstrap/Carousel';

function Services() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30"
          src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_25580657.jpg?crop=0%2C240%2C1920%2C1440&wid=1640&hei=1230&scl=1.170731707317073"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30"
          src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_36181712.jpg?crop=0%2C0%2C3557%2C2668&wid=1640&hei=1230&scl=2.1691056910569104"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30"
          src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/1W2A1430.jpg?crop=0%2C233%2C4000%2C2200&wid=4000&hei=2200&scl=1.0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Services;