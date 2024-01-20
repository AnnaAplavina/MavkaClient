"use client"

import React, { useState } from 'react'
import "./LoginSignup.css"

import axios from 'axios'


function LoginSignup (
  setToken: any
) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Login");

  const logInUser = async () => {
    await axios.post("//127.0.0.1:5000/auth/login", {
      email,
      password
    }).then((resp) => {
      if (resp.status === 200) {
        setToken(resp.data.access_token);
        window.location.href = "/";
      } else {
        alert(resp);
      }
    }).catch((err) => {
      alert(err);
    });
};

const RegisterUser = async () => {
  await axios.post("//127.0.0.1:5000/auth/register", {
    email,
    password
  }).then((resp) => {
    if (resp.status === 200) {
      setToken(resp.data.access_token);
      window.location.href = "/";
    } else {
      alert(resp);
    }
  }).catch((err) => {
    alert(err);
  });
};

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
        <div className="inputs">
          <div className="input">
            <img src="./Assets/email.png" alt=''/>
            <input 
              type='email' 
              placeholder='Email'
              onChange = {(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="./Assets/password.png" alt=''/>
            <input 
              type='password' 
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
          </div>
        </div>
        <div className="forgot-password">Lost password? <span>Click here!</span></div>
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={action === "Login" ? () => {setAction("Sign Up")} : () => logInUser()}>Login</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={action==="Sign Up"? ()=>{setAction("Login")} : () => RegisterUser()}>Sign Up</div>
        </div>
    </div>
  )
}

export default LoginSignup