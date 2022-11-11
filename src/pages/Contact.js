import { useState } from "react";
import Carousel from "./Carousel";
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
  background-color:#f5faf5;
`
const StyledP= styled.p`

  font-size:30px;
  color:green !important;
`

    return (
        <><Carousel/>
        <StyledDiv>
        <form onSubmit={handleSubmit}>
            <label className="greenTxt">Enter your name: 
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </label>
            <input className="green" type="submit"/>
        </form>
        </StyledDiv>
      
        </>
  
    )
};
export default Contact;