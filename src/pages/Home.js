import Carousel from "./Carousel";
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
const Home = () => {
//     const StyledDiv= styled.div`
//   padding:7em;
//   font-size:20px;
//   text-transform:capitalize;
//   background-color:#80808026;
// `
// const StyledP= styled.p`
// padding:0.5em;
// font-size:3em;
// text-align:center;
// text-transform:capitalize;
// color:white;
// `
    return (
        <>
        <Carousel/>
        
         <div className="styled-div">
           <p className="styled-p">OnlinePost</p>
            </div>
            <Accordion defaultActiveKey="0" style={{ margin:'auto' }}>
      <Accordion.Item eventKey="0" className="green">
        <Accordion.Header >Our services</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="green">
        <Accordion.Header>Type of shippings</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </>
    );
};
export default Home;