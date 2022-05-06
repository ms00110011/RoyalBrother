import { ListItemSecondaryAction } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import styles from "./SearchR.module.css";

export const SearchR = () => {

  const id = useParams();
  console.log(id);
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);

  React.useEffect(() => {
    getData();
    // getLow()
    // getHigh()
  }, []);

  const getData = () => {
    console.log(id.id);

    fetch(`http://localhost:9008/search/${id.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData([res]);
      })
      .catch((err) => console.log(err));

    fetch(`http://localhost:9008/search/`)
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
