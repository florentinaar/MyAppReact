import React, { Component, useDebugValue, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ProductList from '../pages/ProductList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Orders =() => {
    const [orders, setOrders] = useState();
    const api = async () => {
        const response = await fetch("https://postieri-demo.herokuapp.com/api/order/getallorders").then((response) =>response.json());
        setOrders(response.value);
    }
    useEffect(()=>{
        api();
    },[])
    console.log(orders)
    const navigate = () => {
        // 👇️ navigate to /
        navigate('/ProductList');
      };
    return (<>
      <h1 style={{  marginTop:'5%',marginBottom:'5%', textAlign:'center' ,color: 'green'}}>All Orders</h1>
      <Container  style={{  marginTop:'5%',marginBottom:'10%'}}>   
        <Table striped bordered hover variant="white">
            <thead>
            <tr>
            <th>Email</th>
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
          <td>{t.phone}</td>
          <td> {t.price}</td>
          <td> 
          { orders.products && orders.products.map((products)=>(  
            <p>{products.name}</p>
          ))}
          </td>
          <td ><Button variant="success" onClick={navigate}>View Product list</Button>{' '}</td>
        </tr>
         ) )};

      </tbody>
    </Table>
    </Container>
               
    </>
);}

export default Orders;