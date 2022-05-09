import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { datetime, hourspay, timelineveh } from "../../Redux/Action";
import style from "./Home.module.css";
import TodayDate from "./TodayDate";

const Form2 = () => {


  //   console.log(today)
  const {id} = useParams()
  console.log(id)

  const dispatch = useDispatch();

  const DateTod = TodayDate();
  console.log(DateTod);

  const navigate = useNavigate()

  const init = {
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: "",
  };
  const [data, setData] = useState(init);
  const [duration, setDuration] = useState(init);
  console.log(data);


  const [totalHours, setTotalHours] = useState(0);
  const [enterError,setEnterError] = useState(false)

  const [timeline, setTimeline] = useState("");



  function errorTimeout() {
    setEnterError(false)
  }



  const dataHandle = (e) => {
    let { value, name } = e.target;
    console.log(name, value);

    let value2 = value;

    if (name === "pickupDate") {
      value = value.trim().split("-").map(Number);

      let monthsname = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      for (let i = 0; i <= monthsname.length; i++) {
        if (value[1] === i) {
          var pickupmonth = monthsname[i - 1];
        }
      }

      let str = value[2] + " " + pickupmonth + " " + value[0];
      console.log("heythere", str);
      value = str;
    }

    if (name === "dropDate") {
      value = value.trim().split("-").map(Number);

      let monthsname = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let dropOffMonth;

      for (let i = 0; i <= monthsname.length; i++) {
        if (value[1] === i) {
          dropOffMonth = monthsname[i - 1];
        }
      }
      let str = value[2] + " " + dropOffMonth + " " + value[0];
      value = str;
    }
    setData({ ...data, [name]: value });
    setDuration({ ...duration, [name]: value2 });
  };







  const handleAdd = (e) => {
    e.preventDefault()

    if (data.pickupDate==""||data.pickupTime==""||data.dropDate==""||data.dropTime=="") {
      setEnterError(true)
      setTimeout(errorTimeout, 5000);
    }
    else {
      
    let str
    let totalHoursVEH
    setDuration(duration);

    if (duration.pickupDate === duration.dropDate) {
      let timePick = duration.pickupTime.trim().split(":").map(Number);
      let timeDrop = duration.dropTime.trim().split(":").map(Number);

      let hrs = Math.abs(timeDrop[0] - timePick[0]);
      let min = Math.abs(timeDrop[1] - timePick[1]);

       str =
        `${hrs !== 0 ? hrs + " " + "hrs" : ""}` +
        `${min !== 0 ? min + " " + "min" + " " : ""}`;

       totalHoursVEH = hrs;
    } else {
      let PickupDateSA = duration.pickupDate.trim().split("-").map(Number);
      let DropDateSA = duration.dropDate.trim().split("-").map(Number);

      console.log(PickupDateSA);
      console.log(DropDateSA);

      let timePick = duration.pickupTime.trim().split(":").map(Number);
      let timeDrop = duration.dropTime.trim().split(":").map(Number);

      let hrs = Math.abs(timeDrop[0] - timePick[0]);
      let min = Math.abs(timeDrop[1] - timePick[1]);
      let days = Math.abs(DropDateSA[2] - PickupDateSA[2]);
      let month = Math.abs(DropDateSA[1] - PickupDateSA[1]);
      let year = Math.abs(DropDateSA[0] - PickupDateSA[0]);
      console.log(year);
      console.log(month);
      console.log(days);

       str =
        `${year !== 0 ? year + " " + "year" : ""}` +
        `${month !== 0 ? month + " " + "months" + " " : ""}` +
        `${days !== 0 ? days + " " + "days" : ""}`;
      console.log(str);

       totalHoursVEH = hrs + year * 8760 + month * 730 + days * 24;

    }


    console.log(totalHoursVEH+"sajkdhkdhkdhkajdh")
    console.log(str+"jklajsdlkajdlkajdlksajdlkajdlkajdlkajdlkjaj")
    

    setTimeline(str)
    setTotalHours(totalHoursVEH)

    

    dispatch(hourspay(totalHoursVEH))
    dispatch(timelineveh(str))

    setData(data);
    dispatch(datetime(data));
    console.log(data);
    navigate(`/searchR/${id}`)
    }

  };

  return (
    <div>
      <form className={style.landing_form}>

        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Search your next ride
        </h2>
      {enterError?<h6>Please pick your own valid date and time</h6>:""}

        <p
          style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "-5px" }}
        >
          Pickup
        </p>
        <input
          type="date"
          placeholder="date"
          name="pickupDate"
          dateFormat="dd/MM/yyyy"
          onChange={dataHandle}
          defaultValue={`${DateTod}`}
        />
        <input
          type="time"
          name="pickupTime"
          onChange={dataHandle}
          defaultValue="10:00"
        />{" "}
        <br />
        <p
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            marginBottom: "-5px",
            paddingTop: "25px",
          }}
        >
          Dropoff
        </p>
        <input
          type="date"
          name="dropDate"
          dateFormat="dd/MM/yyyy"
          onChange={dataHandle}
          defaultValue={`${DateTod}`}
        />
        <input
          type="time"
          name="dropTime"
          onChange={dataHandle}
          defaultValue="21:47"
        />
          {" "}
          <br />
          <button className={style.landingBt} onClick={handleAdd}>
            Search
          </button>
      </form>
    </div>
  );
};

export default Form2;
