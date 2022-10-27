import React, { Component, useDebugValue, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ProductList from '../pages/ProductList';
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
    return (
                    
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>First Name</th>
                <th>date</th>
                <th>status</th>
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
          <td>Mark</td>
          <td>{t.date}</td>
          <td>{t.status}</td>
          <td>{t.Email}</td>
          <td>{t.phone}</td>
          <td> {t.price}</td>
          <td> 
          { orders.products && orders.products.map((products)=>(  
            <p>{products.name}</p>
          ))}
          </td>
          <td ><Button variant="warning" onClick={navigate}>View Product list</Button>{' '}</td>
        </tr>
         ) )};

      </tbody>
    </Table>
               
        
);}

export default Orders;