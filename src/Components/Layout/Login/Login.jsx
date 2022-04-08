import React from "react";
import { getUsersAction } from "../../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.css";
import { margin } from "@mui/material/node_modules/@mui/system";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const dispactch = useDispatch();

  const login = useSelector((state) => state.isLogin);


  const navigate = useNavigate()


  const [formData, setFormdata] = React.useState({
    email: "",
    password: "",
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

    try{dispactch(getUsersAction(formData.email, formData.password));
    navigate('/')
    }
    catch(error) {console.log(error)}
    
  };



  const { email, password } = formData;

  return (
    <div>
      <div className={styles.logincentre}>
        <h2 style={{ color: "black", margin: "40px" }}>Rent.Ride.Explore</h2>
        <div className={styles.logincard}>
          <div className={styles.loginbanner}>
            <h6>LOGIN</h6>
          </div>
          <form onSubmit={handleSumbit}>
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
                id="email"
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
                id="email"
                type="text"
                onChange={handlechange}
                value={email}
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
              email={password}
            />{" "}
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
            >
              Login With Password
            </Button>
          </form>
          <Link to="/signup">
            <p style={{color:"black",padding:"20px"}}>
              New here? Sign up here to start riding!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
