import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const StyledDiv= styled.div`
  padding:2%;
  font-size:20px;
  text-transform:capitalize;
  background-color:lightgreen;
`
const StyledP= styled.div`

  font-size:30px;
  color:Black;
`
function App() {
  return (
   <StyledDiv>
    <StyledP>
    styled paraghrap
    </StyledP>
   </StyledDiv>
  );
}

export default App;
