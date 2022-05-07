import React from 'react'
import Form2 from './Form2'
import style from "./Home.module.css";


export const TariffBook = () => {
  return (
    <div>


<div className={style.landing_container}>


        <div className={style.landing_image}> </div>
        <Form2 />

        <div className={style.save}>
          <span style={{ color: "#fed250" }}>Save</span> upto{" "}
          <span style={{ color: "#fed250" }}>30%</span> with Royal Brother
          <span style={{ color: "#fed250" }}>X</span>
        </div>
      </div>

    </div>
  )
}
