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
console.log(data)
const dataHandle = (e) =>{
    const {value,name} = e.target
    setData({...data,[name]:value})
}
const url ="http://localhost:3001/time"
const handleAdd= () =>{
  fetch(url,{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(data)
  })
}
// console.log()
// console.log(data)
  return (
    <div>
        <form className={style.landing_form}>
            <h2>Search your next ride</h2>
            <p>Pickup</p>
            <input type="date" name="pickupDate" dateFormat="dd/MM/yyyy" onChange={dataHandle}/>
            <input type="time" name="pickupTime" onChange={dataHandle}/> <br />
            <p>Dropoff</p>
            <input type="date" name="dropDate" dateFormat="dd/MM/yyyy"  onChange={dataHandle}/>
            <input type="time" name="dropTime" onChange={dataHandle}/> 
            <Link to="/searchR">
            <button onClick={handleAdd}>Search</button>

            </Link>
        </form>
    </div>
  )
}

export default Form