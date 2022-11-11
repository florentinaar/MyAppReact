import Carousel from 'react-bootstrap/Carousel';

function Services() {
  const slider = [{
    id:1,
    src:'/assets/img/c2.jpeg',
    title:'top orders',
    description:'Nulla vitae elit libero, a pharetra augue mollis interdum'
  }
,{
  id:1,
  src:'/assets/img/courier.jpeg',
  title:'top orders',
  description:'Nulla vitae elit libero, a pharetra augue mollis interdum'
}
]
  return (
    <Carousel>
      {slider.map((slider, index)=>(
             <Carousel.Item key={index}>
             <img
               className="d-block w-100 h-30"
               src={slider.src}
               alt="First slide"
             />
             <Carousel.Caption>
              <h3>{slider.title}</h3>
               <p>{slider.description}</p>
             </Carousel.Caption>
           </Carousel.Item>
      )
      )
      }
    </Carousel>
  );
}

export default Services;