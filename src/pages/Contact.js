import { useState } from "react";
import Services from "./Services";
import styled from 'styled-components';

function Contact(){
    const[name,setName] =useState("");
    const handleSubmit = (event)=> {
        event.preventDefault();
        alert(`name: ${name}`)
    }
    const StyledDiv= styled.div`
  padding:7em;
  font-size:20px;
  text-transform:capitalize;
  background-color:#80808026;
`
const StyledP= styled.p`

  font-size:30px;
  color:Black;
`

    return (
        <><Services/>
        <StyledDiv>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </label>
            <input type="submit"/>
        </form>
        </StyledDiv>
      
        </>
  
    )
};
export default Contact;