import React from "react";
import style from "./Offer.module.css";
import offerCard from "./img/offerCard1.jpg";

const OfferCard = (props) => {
  return (
    <div className={style.OfferCard}>
      <img src={offerCard} alt="offer Card"/>
    </div>
  );
};

export default OfferCard;
