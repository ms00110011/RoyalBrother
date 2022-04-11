import React from 'react'
import BasicCard from './BasicCard'
import styles from "./Tariff.module.css"
export const Tariff = () => {

    const [data,setData] = React.useState([])


React.useEffect(()=>{
    fetch(`http://localhost:3001/tariff`)
    .then((res)=>res.json())
    .then((res)=>setData(res))
},[])









  return (
    <div>

    <div className={styles.tariffWrapper}>
        <h2 style={{padding:"50px"}}>Bike rental tariffs in Pune</h2>
<div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
{        data.map((item)=>(
            <BasicCard name={item.name} img={item.img} booktime={item.booktime} kmlimit={item.kmlimit} exkm={item.exkm} />
        ))}

</div>
    </div>

    </div>
  )
}
