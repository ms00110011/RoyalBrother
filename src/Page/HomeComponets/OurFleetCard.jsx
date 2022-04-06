import React from 'react'
import style from "./Home.module.css"

const OurFleetCard = (props) => {
  // const data ="Honda Dio"
  return (
    <div className={style.fleet_card}>
        <h4>{props.text}</h4>
        <img src={props.img} alt="" />
        <div className={style.line}></div>
        <h2>{props.price}</h2>
        <button className={style.homeButton}>Book Now</button>
    </div>
  )
}

export default OurFleetCard