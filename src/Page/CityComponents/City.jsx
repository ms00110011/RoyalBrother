import React from "react";
import styles from "./City.module.css";

export const City = () => {
  return (
    <div className={styles.mainGrid}>
      <div className={styles.itemContainer1}>
        <p className={styles.cityName}>Agra</p>
      </div>
      <div className={styles.itemContainer2}>
        <p className={styles.cityName}>Ahmedabad</p>
      </div>
      <div className={styles.itemContainer3}>
        <p className={styles.cityName}>Alleppey</p>
      </div>
      <div className={styles.itemContainer4}>
        <p className={styles.cityName}>Amritsar</p>
      </div>
      <div className={styles.itemContainer5}>
        <p className={styles.cityName}>Andaman Nicobar</p>
      </div>
      <div className={styles.itemContainer6}>
        <p className={styles.cityName}>Bangalore</p>
      </div>
      <div className={styles.itemContainer7}>
        <p className={styles.cityName}>Bangalore Airport</p>
      </div>
      <div className={styles.itemContainer8}>
        <p className={styles.cityName}>Bangkok</p>
      </div>
      <div className={styles.itemContainer9}>
        <p className={styles.cityName}>Belagavi</p>
      </div>
      <div className={styles.itemContainer10}>
        <p className={styles.cityName}>Bhubaneswar</p>
      </div>
    </div>
  );
};
