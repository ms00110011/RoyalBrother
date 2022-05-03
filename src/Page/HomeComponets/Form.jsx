import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import TodayDate from "./TodayDate";


const Form = () => {
  //   console.log(today)


  const DateTod = TodayDate()
  console.log(DateTod)


  const init = {
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: "",
  };
  const [data, setData] = useState(init);
  console.log(data);

  const dataHandle = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const url = "https://rbjson.herokuapp.com/time";
  const handleAdd = (e) => {
    // fetch(url,{
    //   method:"POST",
    //   headers:{"content-type":"application/json"},
    //   body:JSON.stringify(data)
    // })

    setData(data);
    console.log(data);
  };
  // console.log()
  // console.log(data)
  return (
    <div>
      <form className={style.landing_form}>
        <h2 style={{fontSize:"24px", fontWeight:"bold"}}>Search your next ride</h2>
        <p style={{fontSize:"15px", fontWeight:"bold" , marginBottom:"-5px"}}>Pickup</p>
        <input
          type="date"
          placeholder="date"
          name="pickupDate"
          dateFormat="dd/MM/yyyy"
          onChange={dataHandle}
          defaultValue= {`${DateTod}`}
        />
        <input type="time" name="pickupTime" onChange={dataHandle} defaultValue="10:00" /> <br />
        <p style={{fontSize:"15px", fontWeight:"bold", marginBottom:"-5px", paddingTop:"25px"}}>Dropoff</p>
        <input
          type="date"
          name="dropDate"
          dateFormat="dd/MM/yyyy"
          onChange={dataHandle}
          defaultValue= {`${DateTod}`}
        />
        <input type="time" name="dropTime" onChange={dataHandle} defaultValue="21:47" />
        <Link to="/searchR"> <br />
          <button className={style.landingBt} onClick={handleAdd}>Search</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
