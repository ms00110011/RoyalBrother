import React from "react";
import style from "./Home.module.css";
import sanitized from "../../Photo/sanitized.png";
import tool from "../../Photo/tools.png";
import tools1 from "../../Photo/tools1.png";
import umbreall from "../../Photo/umbreall.png";
import Slider from "./Slider";
import OurFleetCard from "./OurFleetCard";
import Form from "./Form";
import HomeBike1 from "../../Photo/homeBike.png";
import HomeBike2 from "../../Photo/homeBike1.png";
import HomeBike3 from "../../Photo/homeBike3.png";
import Senitized from "./Senitized";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Line from "./Line";
import add from "../HomeComponets/icons/add.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div className={style.landing_container}>
        <div className={style.landing_image}> </div>
        <Form />

        <div className={style.save}>
          <span style={{ color: "#fed250" }}>Save</span> upto{" "}
          <span style={{ color: "#fed250" }}>30%</span> with Royal Brother
          <span style={{ color: "#fed250" }}>X</span>
        </div>
      </div>
      <div className={style.sanitized}>
        <Senitized img={sanitized} text={"Sanitized Vehicles"} />
        <Senitized img={umbreall} text={"Vehicle Insurance"} />
        <Senitized img={tool} text={"24/7 Roadside Assistance"} />
        <Senitized img={tools1} text={"Bike Maintenance"} />
      </div>
      <div className={style.rbx}>
        <button className={style.subscribe}>Subscribe now </button>
      </div>
      <div>
        <div className={style.fleet}>
          <div>
            <h1 style={{ color: "black" }}>OUR FLEET</h1>
            <Line />
          </div>
          <div className={style.fleet_card_container}>
            <OurFleetCard
              img={HomeBike1}
              text={"Honda Dio"}
              price={"19/hr"}
            />
            <OurFleetCard
              img={HomeBike2}
              text={"Honda Activa 5 G"}
              price={"22/hr"}
            />
            <OurFleetCard
              img={HomeBike3}
              text={"Royal EndField 350"}
              price={"35/hr"}
            />
            <div>
             <Button component={Link} to={'/tariff'} sx={{backgroundColor:"#fed250", color:"black",marginTop:"150px", marginLeft:"20px", height:"100px", borderRadius:"15px", width:"350px"}}>Check out our Tariff Page <ArrowForwardIcon /></Button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.slider_com}>
        <h1 style={{ color: "black",marginTop:"-400px" }}>WE BELIEVE IN QUALITY</h1>
        <Slider />
      </div>
    </div>
  );
};
export default Home;
