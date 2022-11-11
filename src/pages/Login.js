import { useState } from "react";
import React from 'react';
import { ReactDOM } from "react";
const Login = () => {
    const [inputs, setInputs] = useState({});
    const handleChange = (event)=> {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]:value}))
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(inputs);
    }
    return (<>
        <p class="loginTxt">Login in our page</p>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}    
             />
            </label>
            <label>Enter your age:
                <input
                type="number"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}    
             />
            </label>
            <input type="submit"/>
        </form>
        </>
    )
};
export default Login;