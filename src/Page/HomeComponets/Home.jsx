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
import Line from "./Line";
import add from "../HomeComponets/icons/add.png";
import { Link } from "react-router-dom";

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
            <h1 style={{ color: "black" }}>OUR FEET</h1>
            <Line />
          </div>
          <div className={style.fleetDuration}>
            <label htmlFor="">Duration </label>
            <select name="hours" id="">
              <option value="">Hours</option>
              <option value="">7 Days</option>
              <option value="">15 Days</option>
              <option value="">1 months</option>
            </select>
          </div>
          <div className={style.fleet_card_container}>
            <OurFleetCard
              img={HomeBike1}
              text={"Honda Dio"}
              price={"$1/Hours"}
            />
            <OurFleetCard
              img={HomeBike2}
              text={"Honda Activa 5 G"}
              price={"$2/Hours"}
            />
            <OurFleetCard
              img={HomeBike3}
              text={"Royal EndField 350"}
              price={"$3/Hours"}
            />
            <div  >
              <div className={style.add_more}>
                <Link to="/searchR">
                <img
                  src={add}
                  onClick={() => {
                    console.log("aman");
                  }}
                  alt=""
                />
                </Link>
              </div>
              <OurFleetCard
                img={HomeBike3}
                text={"Royal EndField 350"}
                price={"$3/Hours"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.slider_com}>
        <h1 style={{ color: "black" }}>WE BELIEVE IN QUALITY</h1>
        <Slider />
      </div>
    </div>
  );
};
export default Home;
