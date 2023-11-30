import React, { useState } from "react";
import { getUsersAction } from "../../../Redux/Action";
import { useDispatch } from "react-redux";
import styles from "./Signup.module.css";
import { margin } from "@mui/material/node_modules/@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { Navigate, useNavigate } from "react-router-dom";

import {Redirect} from "react-router-dom"
import { Check } from "@mui/icons-material";
import validator from 'validator'


export const Signup = () => {
  
  const navigate = useNavigate()

  const dispactch = useDispatch();

  const [formData, setFormdata] = React.useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const[alert,setAlert] = React.useState(false)
  const [enterError,setEnterError] = useState(false)
  const [phoneError,setphoneError] = useState(false)
  const [emailError,setEmailError] = useState(false)
  const [wait,setWait] = useState(false)




  function alertNow() {
    setAlert(false)
  }

  function emailErrorTimeout() {
    setEmailError(false)
  }

  function errorTimeout() {
    setEnterError(false)
  }

  function redirect() {
    navigate('/login')
  }

  function phoneerrorTimeout() {
    setphoneError(false)
  }

  const handlechange = (e) => {
    const { id, value } = e.target;

    setFormdata({
      ...formData,
      [id]: value,
    });
  };

  const handleSumbit = (e) => {

    e.preventDefault();




      if(name===""|| mobile==="" ||email===""|| password==="") {
        setEnterError(true)
        setTimeout(errorTimeout, 5000);
      }
      else if(mobile.length!==10) {
        setphoneError(true)
        setTimeout(phoneerrorTimeout, 5000);
      }
      else if(!validator.isEmail(email)) {
        console.log(validator.isEmail(email))
        setEmailError(true)
        setTimeout(emailErrorTimeout, 5000);
      }
      else {

        setWait(true)

        const payload = JSON.stringify(formData);
    
        fetch("https://rbbackendclone.onrender.com/signup", {
          method: "POST",
          body: payload,
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())

          .then((res) => { setWait(false)
            setAlert(true)
            setTimeout(alertNow, 3000);
            setTimeout(redirect, 1500);
            
          } );

      }
  };

  // <Navigate to="/login" />

  const { name, mobile, email, password } = formData;

  return (
    <div>
      <div className={styles.logincentre}>
        <h2 style={{ color: "black", margin: "40px" }}>Rent.Ride.Explore</h2>
        <div className={styles.logincard}>
          <div className={styles.loginbanner}>
            <h6>SIGN UP</h6>
          </div>
        {enterError?<h6 style={{color:"red", fontSize:"14px",marginTop:"-30px"}}>Please fill all the fields.</h6>:""}
        {alert?<h6 style={{color:"green", fontSize:"14px",marginTop:"-30px"}}>You have been registered successfully.</h6>:""}
        {wait?<h6 style={{color:"#FED250", fontSize:"14px",marginTop:"-30px"}}>Please Wait...</h6>:""}


          <form onSubmit={handleSumbit}>
            <h6 style={{ textAlign: "left", marginLeft: "20px" }}>
              Name as per Aadhaar/Passport
            </h6>
            <input
              style={{
                border: "0",
                backgroundColor: "whitesmoke",
                height: "50px",
                width: "310px",
                borderRadius: "5px",
                marginLeft: "22px",
                padding: "0",
                marginBottom: "40px",
              }}
              id="name"
              type="text"
              onChange={handlechange}
              value={name}
            />

        {emailError?<h6 style={{color:"red", fontSize:"14px",whiteSpace:"nowrap"}}>Please enter a valid email.</h6>:""}


            <h6 style={{ textAlign: "left", marginLeft: "20px" }}>Email</h6>
            <input
              style={{
                border: "0",
                backgroundColor: "whitesmoke",
                height: "50px",
                width: "310px",
                borderRadius: "5px",
                marginLeft: "22px",
                padding: "0",
                marginBottom: "40px",
              }}
              id="email"
              type="text"
              onChange={handlechange}
              value={email}
            />
        {phoneError?<h6 style={{color:"red", fontSize:"14px",whiteSpace:"nowrap"}}>Please enter a valid 10 digit Phone Number.</h6>:""}


            <h6 style={{ textAlign: "left", marginLeft: "20px" }}>Phone</h6>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "40px",
                width: "90%",
              }}
            >


              <input
                style={{
                  border: "0",
                  backgroundColor: "whitesmoke",
                  height: "50px",
                  width: "50px",
                  borderRadius: "5px",
                  marginLeft: "22px",
                  padding: "0",
                }}
                type="text"
                placeholder="+91"
              />
              <input
                style={{
                  border: "0",
                  backgroundColor: "whitesmoke",
                  height: "50px",
                  width: "250px",
                  borderRadius: "5px",
                }}
                id="mobile"
                type="number"
                onChange={handlechange}
                value={mobile}
              />
              <br />
            </div>
            <input
              style={{
                border: "0",
                backgroundColor: "whitesmoke",
                height: "50px",
                width: "310px",
                borderRadius: "5px",
                marginLeft: "22px",
                padding: "0",
                marginBottom: "40px",
              }}
              id="password"
              type="password"
              placeholder="Enter your Password"
              onChange={handlechange}
              value={password}
            />
            <br />
            {/* <input type="submit" /> */}
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#FED250",
                width: "90%",
                color: "black",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              // onClick={()=>navigate('/login')}
              onClick={handleSumbit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
