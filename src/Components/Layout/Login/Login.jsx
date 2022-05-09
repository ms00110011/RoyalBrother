import React, { useState } from "react";
import { getUsersAction } from "../../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.css";
import { margin } from "@mui/material/node_modules/@mui/system";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useSelector((state) => state.isLogin);
  console.log(login);

  const [enterError, setEnterError] = useState(false);
  const [wait, setWait] = useState(false);

  const [formData, setFormdata] = React.useState({
    phone: "",
    password: "",
  });


  React.useEffect(()=>{
    now()
  },[login])

  function errorTimeout() {
    setEnterError(false);
  }

  function now() {
    if (login) {
      navigate(`/`);
    } else {
      setEnterError(true);
      setTimeout(errorTimeout, 5000);
    }
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

    console.log(login);

    if (phone === "" || password === "") {
      setEnterError(true);
      setTimeout(errorTimeout, 5000);
    } else if (phone.length !== 10) {
      setEnterError(true);
      setTimeout(errorTimeout, 5000);
    } else {
      const payload = JSON.stringify(formData);

      dispatch(getUsersAction(formData.phone, formData.password));
      // setWait(true)
    }

  };

  const { phone, password } = formData;

  return (
    <div>
      <div className={styles.logincentre}>
        <h2 style={{ color: "black", margin: "40px" }}>Rent.Ride.Explore</h2>
        <div className={styles.logincard}>
          <div className={styles.loginbanner}>
            <h6>LOGIN {login}</h6>
          </div>
          {wait ? (
            <h6 style={{ color: "#FED250", fontSize: "14px" }}>
              Please wait...
            </h6>
          ) : (
            ""
          )}

          {enterError ? (
            <h6 style={{ color: "red", fontSize: "14px" }}>
              Phone Number or password is wrong.Please try again.
            </h6>
          ) : (
            ""
          )}
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
                id="phoneA"
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
                id="phone"
                type="number"
                onChange={handlechange}
                value={phone}
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
              phone={password}
            />{" "}
            <br />
            {/* <input type="submit" /> */}
            <Button
              variant="contained"
              // onClick={()=>setTimeout(now,6000)}
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
            <p style={{ color: "black", padding: "20px" }}>
              New here? Sign up here to start riding!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
