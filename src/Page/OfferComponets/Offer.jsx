import React from 'react'
import style from  "./Offer.module.css"
import OfferCard from './OfferCard'

const Offer = () => {
  return (
    <div>
        <h1>Offer Page </h1>
        <div className={style.Offer}>
            <div className={style.Rental}>
                <h1>BIKE RENTAL OFFERS IN Ahmedabad</h1>
            </div>
        </div>
        <div className={style.card_container}>
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
        </div>
    </div>
  )
}

export default Offer