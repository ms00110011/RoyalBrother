import React from 'react'
import style from "./Home.module.css"

const Senitized = (props) => {
  return (
        <div className={style.sanitized_section}>
          <img src={props.img} alt="sanitized" />
          <h4>{props.text}</h4>
        </div>
  )
}

export default Senitized