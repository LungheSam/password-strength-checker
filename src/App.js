import './App.css';
import React from "react";
import { useState } from 'react';
import passwordStrengthCalculator from './passwordCalculator';
function App() {
  const [password,setPassword]=useState("");
  const [passwordStrength,setPasswordStrength]=useState("");
  const handleChange=(e)=>{
    console.log(e.target.value);
    setPassword(e.target.value);
    setPasswordStrength(passwordStrengthCalculator(password));
  }
  return (
    <div className="App">
      <div className="welcome-heading">
        <h1>How Strong is my Password?</h1>
      </div>
      <div className="input-password">
          <input type="password" name='password' className='input-password-input' onChange={ handleChange }  placeholder="Enter your password here....."/>
      </div>
      <div className={"response "+passwordStrength}>
          {passwordStrength}
      </div>
    </div>
  );
}

export default App;
