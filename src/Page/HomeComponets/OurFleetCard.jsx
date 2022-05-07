import CurrencyRupee from '@mui/icons-material/CurrencyRupee'
import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Home.module.css"

const OurFleetCard = (props) => {
  // const data ="Honda Dio"
  return (
    <div className={style.fleet_card}>
        <h4 style={{fontSize:"16px"}}>{props.text}</h4>
        <img src={props.img} alt="" />
        <div className={style.line}></div>
        <h2 style={{fontSize:"20px"}}> <CurrencyRupee /> {props.price}</h2>
        <Button component={Link} to={'/tariff'} sx={{backgroundColor:'#FED250',color:"black"}}>Book Now</Button>
    </div>
  )
}

export default OurFleetCard