import { CurrencyRupee } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { rideamount, setPayable } from "../../Redux/Action";
import styles from "./Summary.module.css";



export const Summary = () => {

  const dispatch = useDispatch()

  var { name, img, perhr} = useSelector(
    (state) => state.vehicle
  );

  var  {pickupDate,pickupTime,dropDate,dropTime} = useSelector(
    (state)=> state.durationData
  )

  var payTotal = useSelector(
    (state) => state.payTotal
  );

  

  var timeline = useSelector(
    (state) => state.timeline
  );



  let totalPayable = Math.ceil((Math.floor(((perhr*payTotal)*28)/100))+(perhr*payTotal))+Math.floor(((perhr*payTotal)*28)/100)+(perhr*payTotal)
console.log(totalPayable)

  const handleSummary = ()=> {
    console.log("handlePayment")
    dispatch(rideamount(totalPayable))
  }




  return (  
  <>
   
   
   <div>
      <div className={styles.header}>
        Now rent two wheelers for{" "}
        <span className={styles.bold}> 4 or 7 days</span> at a lower special
        price. Click to modify search to{" "}
        <spam className={styles.blueText}>4 days</spam> or{" "}
        <spam className={styles.blueText}>7 days</spam> ( 1 Day )
      </div>
      <div className={styles.mainContainer}>
        <div className="row">
          <div
            className={`col-lg-8 col-md-8 col-sm-6 ${styles.mainSummary}`}
          >
            <div className="row">
              <div className="col-lg-4 col-md-4 ">
                <p className={styles.summary}>SUMMARY</p>
                <div className={styles.thumbnail}>
                  <div className={styles.img}>
                    <img
                      className={styles.img}
                      src={img}
                      alt="bike"
                    />{" "}
                  </div>
                  <div>
                    <p className={styles.name}>{name}</p>
                  </div>
                </div>
              </div>
              <div className={`col-lg-8 col-md-8`}>
                <div className="pt-5">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className={styles.time}>{pickupTime}</p>
                      <p className={styles.date}>{pickupDate}</p>
                    </div>
                    <div>
                      <p className={styles.to}>to</p>
                    </div>
                    <div>
                      <p
                        className={`${styles.time}`}
                        style={{ textAlign: "right" }}
                      >
                        {dropTime}
                      </p>
                      <p
                        className={styles.date}
                        style={{ textAlign: "right" }}
                      >
                        {dropDate}
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hr1} />
                  <hr className={styles.hr2} />
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div>
                      <p className={styles.summaryDes}>
                        {timeline} *
                        <span className={styles.rupees}> &#x20B9;</span>
                         {perhr*24}/day
                      </p>
                      <p className={styles.summaryDes}>Peak pricing</p>
                    </div>
                    <div>
                      {" "}
                      <p
                        className={styles.summaryDes}
                        style={{ textAlign: "right" }}
                      >
                        <span className={styles.rupees}> &#x20B9;</span>{" "}
                        {perhr*payTotal}.00
                      </p>
                      <p
                        className={styles.summaryDes}
                        style={{ textAlign: "right" }}
                      >
                        <span className={styles.rupees}> &#x20B9;</span> 0.0
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <p className={styles.totalAmount}>Total</p>
                    <p
                      className={styles.totalAmount}
                      style={{ textAlign: "right" }}
                    >
                      <span className={styles.rupees}> &#x20B9;</span>{" "}
                      {perhr*payTotal}.00
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      {" "}
                      <p className={styles.summaryDes}>
                        Number of Helmet (?)
                      </p>
                    </div>
                    <div>
                      {" "}
                      <select
                        style={{
                          width: "60px",
                          border: "1px solid whitesmoke",
                          fontSize: "13px",
                          padding: "5px",
                        }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>{" "}
                    </div>
                  </div>
                  <div className="container mt-4 px-0">
                    <div className="row">
                      <div className="col-lg-7">
                        <input
                          className={styles.input}
                          type="text"
                          placeholder="Coupon code"
                        />
                      </div>
                      <div className="col-lg-5">
                        <button className={styles.paymentBtn}>Apply</button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <p className={styles.summaryDes}>Km limit (?)</p>
                      <p className={styles.summaryDes}>
                        Excess km charges (?)
                      </p>
                    </div>
                    <div>
                      {" "}
                      <p
                        className={styles.summaryDes}
                        style={{ textAlign: "right" }}
                      >
                        240km
                      </p>
                      <p
                        className={styles.summaryDes}
                        style={{ textAlign: "right" }}
                      >
                        <span className={styles.rupees}> &#x20B9;</span>{" "}
                        4.0/km
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-6 ${styles.checkout}`}>
            <p className={styles.summary}>CHECKOUT</p>
            <div className="d-flex justify-content-between align-items-center">
              <p className={styles.checkoutDes}>Booking Fee</p>
              <p className={styles.checkoutDes}>
                <span className={styles.rupees}> &#x20B9;</span> {perhr*payTotal}.00
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className={styles.checkoutDes}>IGST (28%)</p>
              <p className={styles.checkoutDes}>
                <span className={styles.rupees}> &#x20B9;</span> {Math.floor(((perhr*payTotal)*28)/100)}.00
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className={styles.checkoutDes}>Refundable Deposit</p>
              <p className={styles.checkoutDes}>
                <span className={styles.rupees}> &#x20B9;</span> {Math.ceil((Math.floor(((perhr*payTotal)*28)/100))+(perhr*payTotal))}.00
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className={styles.totalAmount}>Total Payable Amount</p>
              <p className={styles.totalAmount}>
                <span className={styles.rupees}> &#x20B9;</span> {Math.ceil((Math.floor(((perhr*payTotal)*28)/100))+(perhr*payTotal))+Math.floor(((perhr*payTotal)*28)/100)+(perhr*payTotal)}.00
              </p>
            </div>
            <Button
              sx={{
                backgroundColor: "#FED250",
                color: "black",
                fontSize: "12px",
                width: "100%",
              }}
              component={Link}
              to={"/payment"}
              onClick={handleSummary}
            >
              Make payment
            </Button>
          </div>
        </div>
      </div>
    </div>
   
  </>
  )
};
