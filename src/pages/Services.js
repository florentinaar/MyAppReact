import React, { Component, useDebugValue, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services = () => {
    const [dimensions, setdimensions] = useState();
    const api = async () => {
        const response = await fetch("https://postieri-demo.herokuapp.com/api/dimensions").then((response) =>response.json());
        setdimensions(response);
    }
    useEffect(()=>{
        api();
    },[])
    console.log(dimensions)
    const navigate = () => {
        // 👇️ navigate to /
        navigate('/ProductList');
      };
    return (
        <div style={{  marginTop:'5%',marginBottom:'10%'}}>

     <Container>
        <h1 style={{  marginTop:'5%',marginBottom:'5%', textAlign:'center' ,color: 'green'}}>Box Dimensions</h1>
 <Row>
 {  dimensions && dimensions.map((t)=>(    
    <Col>
    <Card key={t.id} border="success" style={{ width: '18rem' ,marginTop:'5%'}}>
        <Card.Header className="green">{t.name}</Card.Header>
        <Card.Body style={{  }}>
          {/* <Card.Title>{t.name}</Card.Title> */}
          <Card.Text>Width: {t.width}  </Card.Text>
          <Card.Text>Height: {t.height}  </Card.Text>
          <Card.Text>length: {t.length}  </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      ) )};
      </Row>
      </Container>
       
        </div>
    );
};

export default Services;