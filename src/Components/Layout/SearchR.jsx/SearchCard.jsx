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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Searchcard({ name, price, img, id }) {

  const login = useSelector(state=>state.isLogin)



  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: "whitesmoke",
        width: "80%",
        margin: "25px",
      }}
    >
      <CardContent>
        <h6
          sx={{ fontSize: 14, textAlign: "center" }}
          color="text.secondary"
          className={styles.centre}
          gutterBottom
        >
          {name}
        </h6>
        <img src={img} alt="" />

        <div className={styles.centre}>
          <p style={{ padding: "0", margin: "0", color: "gray" }}>
            Available at
          </p>
          <p style={{ borderBottom: "1px solid gray", color: "black" }}>
            Vishalpur (Nehru Bridge Corner)
          </p>
        </div>

        <div className={styles.duration}>
          <div className={styles.bow}>
            <div>09:00 am</div>
            <div>07:00 pm</div>
          </div>
          <div className={styles.bow}>
            <div style={{ fontWeight: "lighter" }}>11 Apr 2022</div>
            <div style={{ fontWeight: "lighter" }}>24 Apr 2022</div>
          </div>
        </div>

        <div className={styles.buttonDiv}>
          <div>
            <CurrencyRupeeIcon />
            {price}
          </div>
          <div>
            <Button
              sx={{ backgroundColor: "#FED250", color: "black" }}
              variant="contained"
              component={Link}
              to= {login?`/searchR/${id}`:'/login'}
              // to={'/login'}
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
