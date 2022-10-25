import React, { Component, useDebugValue, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Ticket =() => {
    const [tickets, setTickets] = useState();
    const api = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>response.json());
        setTickets(response);
    }
    useEffect(()=>{
        api();
    },[])

        return (
              
                <Container>
                    <Row>
                    {
                    tickets && tickets.map((t)=>(
                        <Col> 
                             <Card key={t.id} style={{ width: '18rem' }} >
                                <Card.Body>
                                <Card.Title>{t.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                          ))}
                    </Row>
                </Container>
                
        );
}

export default Ticket;