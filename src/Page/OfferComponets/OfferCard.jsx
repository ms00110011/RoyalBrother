import React from "react";
import style from "./Offer.module.css";
// import offerCard from "./img/offerCard1.jpg";

const OfferCard = (props) => {
  return (
    <div className={style.OfferCard}>
      <img className={style.cardImg} src={props.image} alt="offer Card"/>
      <p>{props.text}</p>
    </div>
  );
};

export default OfferCard;
