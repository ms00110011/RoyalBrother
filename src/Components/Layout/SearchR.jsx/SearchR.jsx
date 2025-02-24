import { ListItemSecondaryAction } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import styles from "./SearchR.module.css";

export const SearchR = () => {

  const id = useParams();
  var city = useSelector((state) => state.city);

  console.log(id);
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);

  React.useEffect(() => {
    getData();
    // getLow()
    // getHigh()
  }, [city]);



  const getData = () => {
    console.log(id.id);



    fetch(`https://rbbackendclone.onrender.com/search/${id.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData([res]);
      })
      .catch((err) => console.log(err));

      fetch(`https://rbbackendclone.onrender.com/searchcity/${city}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData2(res);
      })
      .catch((err) => console.log(err));
  };

  // const getLow = () => {
  //   fetch("https://rbjson.herokuapp.com/tariff?_sort=price&_order=asc")
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  //     .catch((err) => console.log(err));
  // };

  // const getHigh = () => {
  //   fetch("https://rbjson.herokuapp.com/tariff?_sort=price&_order=desc")
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      {/* <div className={styles.sortBar}>
        <h6 style={{ color: "black",fontSize:"14px",padding:"0px",margin:"0",marginRight:"10px" }}>Sort By</h6>
        <button onClick={getData} className={styles.sortButton}>Relevance</button>
        <button  onClick={getLow} className={styles.sortButton}>Price-Low to High</button>
        <button onClick={getHigh} className={styles.sortButton}>Price-High to Low</button>
      </div> */}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {data.map((item) => (
          <SearchCard
            name={item.name}
            img={item.img}

            price={item.priceHour}

            id={item.id}
          />
        ))}
      </div>


      <div>
        <p style={{ marginLeft: "25px" }}>Suggested Results</p>
        <hr />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {data2.map((item) => (
            <SearchCard
              name={item.name}
              img={item.img}
              price={item.priceHour}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
