import React from "react";
import styles from "./PositionMenu.module.css"
import { Link } from "react-router-dom";

export default function PositionMenu({heading,Link1,Link2,Link3})  {
  return (
    <div>
      <div class={styles.dropdown}>
        <button class={styles.dropbtn}>{heading}</button>
        <div class={styles.dropdownContent}>
          <Link to={`/${Link1.toLowerCase().split(" ").join("")}`}>{Link1}</Link>
          <Link to={`/${Link2.toLowerCase().split(" ").join("")}`}>{Link2}</Link>
          <Link to={`/${Link3.toLowerCase().split(" ").join("")}`}>{Link3}</Link>
        </div>
      </div>
    </div>
  );
};
