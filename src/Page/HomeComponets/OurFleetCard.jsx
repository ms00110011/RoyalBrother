import React from 'react'
import style from "./Home.module.css"

const OurFleetCard = () => {
  const data ="Honda Dio"
  return (
    <div className={style.fleet_card}>
        <h4>{data}</h4>
        <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/035/medium/Dio-min_2.png?1519738819" alt="" />
        <div></div>
        <h2>$1/Hours</h2>
        <button>Book Now</button>
    </div>
  )
}

export default OurFleetCard