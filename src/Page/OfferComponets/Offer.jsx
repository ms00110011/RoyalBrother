import React from 'react'
import style from  "./Offer.module.css"
import OfferCard from './OfferCard'
import offerCard1 from "./img/offerCard1.jpg";
import offerCard2 from "./img/offerCard2.jpg";
import offerCard3 from "./img/offerCard3.jpg";
import offerCard4 from "./img/offerCard4.jpg";
import offerCard5 from "./img/offerCard5.jpg";


const Offer = () => {
  return (
    
    <div className={style.Offer_container}>
        <div className={style.Offer}>
            <div className={style.Rental}>
                <h1>BIKE RENTAL OFFERS IN Ahmedabad</h1>
            </div>
        </div>
        <div className={style.card_container}>
            <OfferCard image={offerCard1} />
            <OfferCard  image={offerCard2}/>
            <OfferCard image={offerCard3}/>
            <OfferCard image={offerCard4}/>
            <OfferCard image={offerCard5}/>
        </div>
    </div>
  )
}

export default Offer