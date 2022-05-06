import React from "react";
import { getUsersAction } from "../../../Redux/Action";
import { useDispatch } from "react-redux";
import styles from "./Signup.module.css";
import { margin } from "@mui/material/node_modules/@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { Navigate, useNavigate } from "react-router-dom";

import {Redirect} from "react-router-dom"

export const Signup = () => {
  
  const navigate = useNavigate()

  const dispactch = useDispatch();

  const [formData, setFormdata] = React.useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handlechange = (e) => {
    const { id, value } = e.target;

    setFormdata({
      ...formData,
      [id]: value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const payload = JSON.stringify(formData);

    fetch("http://localhost:9008/signup", {
      method: "POST",
      body: payload,
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => <Navigate to="/login" /> );
  };

  const { name, mobile, email, password } = formData;

  return (
    <div>
      <div className={styles.logincentre}>
        <h2 style={{ color: "black", margin: "40px" }}>Rent.Ride.Explore</h2>
        <div className={styles.logincard}>
          <div className={styles.loginbanner}>
            <h6>SIGN UP</h6>
          </div>
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
                type="text"
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
              type="text"
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
              // onClick={handleSumbit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
