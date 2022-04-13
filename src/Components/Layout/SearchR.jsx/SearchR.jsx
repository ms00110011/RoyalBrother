import { ListItemSecondaryAction } from "@mui/material";
import React from "react";
import SearchCard from "./SearchCard";
import styles from "./SearchR.module.css"

export const SearchR = () => {


  const [data,setData] = React.useState([]) 


  React.useEffect(()=>{
    getData()
    getLow()
    getHigh()
  },[])



  const getData = () => {
    fetch("https://rbjson.herokuapp.com/tariff")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  const getLow = () => {
    fetch("https://rbjson.herokuapp.com/tariff?_sort=price&_order=asc")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  const getHigh = () => {
    fetch("https://rbjson.herokuapp.com/tariff?_sort=price&_order=desc")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };




  return (
    <div>
      <div className={styles.sortBar}>
        <h6 style={{ color: "black",fontSize:"14px",padding:"0px",margin:"0",marginRight:"10px" }}>Sort By</h6>
        <button onClick={getData} className={styles.sortButton}>Relevance</button>
        <button  onClick={getLow} className={styles.sortButton}>Price-Low to High</button>
        <button onClick={getHigh} className={styles.sortButton}>Price-High to Low</button>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
      {        data.map((item)=>(
            <SearchCard name={item.name} img={item.img} price={item.price} id={item.id} />
        ))}
        </div>
    </div>
  );
};
