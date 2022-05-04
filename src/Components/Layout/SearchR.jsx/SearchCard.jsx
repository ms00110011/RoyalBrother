import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { textAlign } from "@mui/material/node_modules/@mui/system";
import styles from "./SearchCard.module.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ForwardIcon from "@mui/icons-material/Forward";
import DropDownADD from "./DropDownAddress/DropDownADD";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Searchcard({ name, price, img, id }) {
  const login = useSelector((state) => state.isLogin);



  var { pickupDate, pickupTime, dropDate, dropTime } = useSelector(
    (state) => state.durationData
  );

  // var { totalHours } = useSelector(
  //   (state) => state.paytotal
  // );

  var { timeline } = useSelector(
    (state) => state.timeline
  );



  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: "white",
        width: "70%",
        margin: "25px",
        padding: "0",
        height: "345px",
      }}
    >
      <CardContent sx={{ paddingLeft: "0", paddingRight: "0" }}>
        <h6
          style={{ fontSize: "14px", textAlign: "center", fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
          className={styles.centre}
        >
          {name}
        </h6>
      <h1 style={{color:"black"}}>{timeline}</h1>

        <img
          src={img}
          alt=""
          style={{ paddingBottom: "10px", width: "60%", marginLeft: "49px" }}
        />

        <div className={styles.centre}>
          <p
            style={{
              padding: "0",
              margin: "0",
              color: "gray",
              borderTop: "3px solid rgb(236, 236, 236)",
              paddingTop: "10px",
            }}
            className={styles.setron}
          >
            Available at
          </p>
          <p style={{ borderBottom: "1px solid gray", color: "black" }}>
            <DropDownADD sx={{ backgroundColor: "white", color: "red" }} />
          </p>
        </div>

        <div className={styles.duration}>
          <div className={styles.bow}>
            <div>{pickupTime}</div>
            <div style={{ fontWeight: "lighter" }}>{pickupDate}</div>
          </div>

          <div>
            <ForwardIcon />
          </div>

          <div className={styles.bow}>
            <div>{dropTime}</div>
            <div style={{ fontWeight: "lighter" }}>{dropDate}</div>
          </div>
        </div>

        <div className={styles.buttonDiv}>
          <div style={{ fontSize: "15px", fontWeight: "bold" }}>
            <CurrencyRupeeIcon sx={{ fontSize: "large" }} />
            {price}
            <p
              style={{ fontSize: "10px", fontWeight: "light", paddingTop: "0" }}
            >
              (1200 kms included)
            </p>
          </div>
          <div>
            <Button
              classname={styles.seans}
              sx={{
                backgroundColor: "#FED250",
                color: "black",
                fontWeight: "500",
                padding: "5px 40px 5px 40px",
                fontSize: "14px",
                textTransform: "none",
              }}
              variant="contained"
              component={Link}
              to={login ? `/searchR/${id}` : "/login"}
              // to={'/login'}
              size="medium"
            >
              Book
            </Button>
          </div>
        </div>
      </CardContent>

      <CardActions></CardActions>
    </Card>
  );
}
