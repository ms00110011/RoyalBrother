import { ListItemSecondaryAction } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import styles from "./SearchR.module.css"


export const SearchAll = () => {

  var city = useSelector((state) => state.city);



  const id = useParams()
  console.log(id)
  const [data,setData] = React.useState([]) 


  React.useEffect(()=>{
    getData()
    getLow()
    getHigh()
  },[city])


  const getData = () => {

    // console.log(id.id)

    fetch(`https://rbbackendclone.onrender.com/searchcity/${city}`)
      .then((res) => res.json())
      .then((res) => {console.log(res)
        setData(res)})
      .catch((err) => console.log(err));
  };

  const getLow = () => {
    fetch(`https://rbbackendclone.onrender.com/searchcityASC/${city}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  const getHigh = () => {
    fetch(`https://rbbackendclone.onrender.com/searchcityDSC/${city}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };




  return (
    <div>

    <h1></h1>

      <div className={styles.sortBar}>
        <h6 style={{ color: "black",fontSize:"14px",padding:"0px",margin:"0",marginRight:"10px" }}>Sort By</h6>
        <button onClick={getData} className={styles.sortButton}>Relevance</button>
        <button  onClick={getLow} className={styles.sortButton}>Price-Low to High</button>
        <button onClick={getHigh} className={styles.sortButton}>Price-High to Low</button>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
      {        data.map((item)=>(
            <SearchCard name={item.name} img={item.img} price={item.priceHour} id={item._id} />
        ))}
        </div>
    </div>
  );
};
