import React from "react";
import { useSelector } from "react-redux";
import BasicCard from "./BasicCard";
import styles from "./Tariff.module.css";
export const Tariff = () => {
  const [data, setData] = React.useState([]);

  var city = useSelector((state) => state.city);

  React.useEffect(() => {
    fetch(`https://rbclonebackend.herokuapp.com/searchcity/${city}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData(res)});
  }, [city]);

  return (
    <div>
      <div className={styles.tariffWrapper}>
        <h2 style={{ padding: "50px" }}>Bike rental tariffs in {city}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {data.map((item) => (

            <BasicCard
              id={item._id}
              name={item.name}
              img={item.img}
              priceHour={item.priceHour}
              kmlimit={item.kmlimit}
              exkm={item.exkm}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
