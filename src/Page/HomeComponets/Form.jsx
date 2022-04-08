import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./Home.module.css"

const Form = () => {
    
//   console.log(today)
const init = {
    pickupDate:"",
    pickupTime:"",
    dropDate :"",
    dropTime:""
}
const  [data, setData] = useState(init)

const dataHandle = (e) =>{
    console.log(data)
// //     console.log(pickupDate);
// //     const {pickupDate,pickupTime,dropDate,dropTime} = e.target;
// //     setData({...data, [name]:value})
}
// console.log(data)
  return (
    <div>
        <form className={style.landing_form}>
            <h2>Search your next ride</h2>
            <p>Pickup</p>
            <input type="date" name="pickupDate" placeholder='Date' value={data.pickupDate} />
            <input type="time" name="pickupTime" id="" placeholder='Time' value={data.pickupTime} /> <br />
            <p>Dropoff</p>
            <input type="date" name="dropDate"/>
            <input type="time" name="dropTime"/> <br />
            <Link to="/searchR">
            <button>Search</button>

            </Link>
        </form>
    </div>
  )
}

export default Form