import React, { Component, useDebugValue, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Orders2 = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e40a0a7c7msh0db4623c210a4e2p1d4312jsne87e2a9ba1be',
            'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
        }
    };
    
    fetch('https://transloc-api-1-2.p.rapidapi.com/vehicles.json?agencies=12%2C16&routes=4000421%2C4000592%2C4005122&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&callback=call', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    // const [orders, setOrders] = useState();
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '2e40a0a7c7msh0db4623c210a4e2p1d4312jsne87e2a9ba1be',
    //         'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
    //     }
    // };
    // const api = async () => {
    // const response = await fetch('https://transloc-api-1-2.p.rapidapi.com/vehicles.json?agencies=12%2C16&routes=4000421%2C4000592%2C4005122&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&callback=call', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    //     setOrders(response); }
    return (<>
        <h1 style={{  marginTop:'5%',marginBottom:'5%', textAlign:'center' ,color: 'green'}}>All Orders</h1>
      <Container  style={{  marginTop:'5%',marginBottom:'10%'}}>   
        <Table striped bordered hover variant="white">
            <thead>
            <tr>
            <th>Email</th>
                <th>date</th>
                <th>status</th>
               
                <th>Phone</th>
                <th>Price</th>
                <th>Product</th>
                <th>ProductDetails</th>
            </tr>
            </thead>
      <tbody>
      {  orders && orders.map((t)=>(    
        <tr key={t.orderId}>
          <td>{t.email}</td>
          <td>{t.date}</td>
          <td>{t.status}</td>
          <td>{t.phone}</td>
          <td> {t.price}</td>
          <td> 
          { orders.products && orders.products.map((products)=>(  
            <p>{products.name}</p>
          ))}
          </td>
          <td ><Button variant="success" >View Product list</Button>{' '}</td>
        </tr>
         ) )};

      </tbody>
    </Table>
    </Container>
               
    </>
    );
};

export default Orders2;