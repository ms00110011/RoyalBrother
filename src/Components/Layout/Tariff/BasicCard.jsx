import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import TabsPanel from "./Tab/TabsPanel";
import styles from "./BasicCard.module.css"


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({id, name, img, priceHour, kmlimit, exkm }) {
  return (
    <Card
      sx={{
        width: "90%",
        margin: "10px",
        backgroundColor: "white",
        // height: "auto",
        padding: "0"
      }}
    >
      <CardContent sx={{height:"620px"}}>
        <h6
          sx={{ fontSize: 14, textAlign: "center" }}
          color="text.secondary"
          gutterBottom
        >
          {name}
        </h6>
        <img src={img} style={{width:"50%"}} alt="" />
        <TabsPanel
          name={name}
          img={img} 
          priceHour={priceHour}
          kmlimit={kmlimit}
          exkm={exkm}
        />
      </CardContent>
      <Button
          sx={{ backgroundColor: "#FED250", width: "100%", color: "black" }}
          component={Link}
          to= {`/Form2/${id}`}
          variant="contained"
          className={styles.buttontariff}

        >
          Book Now
        </Button>
    </Card>
  );
}
