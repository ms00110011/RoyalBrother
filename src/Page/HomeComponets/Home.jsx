import React from 'react'
import style from "./Home.module.css"
import sanitized from "../../Photo/sanitized.png"
import Slider from "./Slider"

const Home = () => {
  return (
    <div>
        <div className={style.landing_image}>

        </div>
        <div className={style.save}>
          Save upto 30% with Royal Brother X
        </div>
        <div className={style.sanitized}>
           <div className={style.sanitized_section}>
                <img src={sanitized} alt="sanitized" />
               <p>sanitized Vehicles</p>
           </div>
           <div className={style.sanitized_section}>
                <img src={sanitized} alt="sanitized" />
               <p>Vehicle Insurance</p>
           </div>
           <div className={style.sanitized_section}>
                <img src={sanitized} alt="sanitized" />
               <p> 24/7 Roadside Assistance</p>
           </div>
           <div className={style.sanitized_section}>
                <img src={sanitized} alt="sanitized" />
               <p>Bike Maintenance</p>
           </div>
          </div>
          <div className={style.rbx}>
            <button className={style.subscribe}>Subscribe now  </button>
          </div>
           <div>
             <Slider/>
           </div>
           <div className={style.fleet}></div>
    </div>
  )
}
export default Home