import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Footer from './pages/Footer';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import About from './pages/About';
import Services from './pages/Services';

// const StyledDiv= styled.div`
//   padding:2%;
//   font-size:20px;
//   text-transform:capitalize;
//   background-color:lightgreen;
// `
// const StyledP= styled.p`

//   font-size:30px;
//   color:Black;
// `

function App() {
  return (
    <BrowserRouter>
    <Layout />
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="home" index element={<Home />}/>
      <Route path="ticket" index element={<Ticket />}/>
      <Route  path="contact" element={<Contact />}/>
      <Route  path="orders" element={<Orders />}/>
      <Route  path="login" element={<Login />}/>
      <Route  path="about" element={<About />}/>
      <Route  path="services" element={<Services />}/>
      <Route  path="productlist" element={<ProductList />}/>
      <Route path="*"   element={<NoPage />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  //  <StyledDiv>
  //   <StyledP>
  //   styled paraghrap
  //   </StyledP>
  //  </StyledDiv>
  );
}

export default App;
