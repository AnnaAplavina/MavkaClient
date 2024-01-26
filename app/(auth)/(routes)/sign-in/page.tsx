"use client"

import React, { useState } from 'react'
import "./LoginSignup.css"
import { Mail, Lock } from "lucide-react";

import axios from 'axios'

function LoginSignup (
  s: any
) {
debugger
  const [username, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [action, setAction] = useState("Login");

  const logInUser = async () => {
    await axios.post("//127.0.0.1:5000/auth/login", {
      username,
      pass
    }).then((resp) => {
      if (resp.status === 200) {
        props.setToken(resp.data.token);
        window.location.href = "/";
      } else {
        alert(resp);
      }
    }).catch((err) => {
      alert(err);
    });
};

const RegisterUser = async () => {
  await axios.post("//127.0.0.1:5000/auth/registration", {
    username,
    pass
  }).then((resp) => {
    if (resp.status === 200) {
      setToken(resp.data.token);
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
            <Mail className='mx-3' />
            <input 
              type='email' 
              placeholder='Username'
              onChange = {(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <Lock className='mx-3' />
            <input 
              type='password' 
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
          </div>
        </div>
        <div className="forgot-password">Lost password? <span>Click here!</span></div>
        <div className="submit-container">
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={action === "Sign Up" ? () => {setAction("Login")} : () => RegisterUser()}>Sign Up</div>
          <div className={action==="Login"?"submit gray":"submit"} onClick={action==="Login"? ()=>{setAction("Sign Up")} : () => logInUser()}>Log In</div>
        </div>
    </div>
  )
}

export default LoginSignup