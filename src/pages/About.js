import React, { Component, useDebugValue, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Player } from 'video-react';
import './aboutStyle.css'
//import "node_modules/video-react/dist/video-react.css"
const About = () => {
    const [persons, setPersons] = useState();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e40a0a7c7msh0db4623c210a4e2p1d4312jsne87e2a9ba1be',
            'X-RapidAPI-Host': 'dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com'
        }
    };
    const api = async () => {
    const response = await fetch('https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?format=json&gender=b&cc=all&email=gmail.com%2Cyahoo.com&pwlen=12&ip=a&phone=l%2Ct%2Co&seed=helloworld&count=10&maxage=40&minage=30&uuid=1&color=1&lic=1&images=1', options)
        .then((response) => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err))
        setPersons(response); 
   
    }
    
    useEffect(()=>{
        api();
    },[])
    return (
        <div>
            <h1 className='heading'>Our Staff</h1>
            <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
     {/* <video controls width="100%">
      <source src="/https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/webm" />
      <source src="/https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video> */}
            <Container>
      <Row>
      { persons &&  persons.map((t)=>(  
    <Col>
    <Card key={t.UUID} border="success" style={{ width: '18rem' ,marginTop:'5%'}}>
        {/* <Card.Header className="green">{t.name}</Card.Header> */}
        <Card.Img variant="top" src={t.image} />
        <Card.Body style={{  }}>
          {/* <Card.Title>{t.name}</Card.Title> */}
          <Card.Text>{t.firstname} {t.lastname} </Card.Text>
          <Card.Text>Email: {t.email}  </Card.Text>
          <Card.Text>Gender: {t.gender}  </Card.Text>
          <Card.Link href="#">More</Card.Link>
        </Card.Body>
      </Card>
      </Col>
      ) )};
      </Row>
      </Container>

      </div>
    );
};

export default About;