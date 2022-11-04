import Services from "./Services";
import styled from 'styled-components';
const Home = () => {
    const StyledDiv= styled.div`
  padding:7em;
  font-size:20px;
  text-transform:capitalize;
  background-color:#80808026;
`
const StyledP= styled.p`
padding:0.5em;
font-size:3em;
text-align:center;
text-transform:capitalize;
color:white;
`
    return (
        <>
        <Services/>
        
         <StyledDiv>
           <StyledP>OnlinePost</StyledP>
            </StyledDiv>
            
        </>
    );
};
export default Home;