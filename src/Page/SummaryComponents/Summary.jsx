import React from "react";
import styles from "./Summary.module.css";
export const Summary = () => {
  document.title = "Summary | Royalbrothers.com";
  return (
    <>
      <div className={styles.header}>
        Now rent two wheelers for{" "}
        <span className={styles.bold}> 4 or 7 days</span> at a lower special
        price. Click to modify search to{" "}
        <spam className={styles.blueText}>4 days</spam> or{" "}
        <spam className={styles.blueText}>7 days</spam> ( 1 Day )
      </div>
      <div className={styles.mainContainer}>
        <div className="row">
          <div className={`col-lg-8 col-md-8 col-sm-6 ${styles.mainSummary}`}>
            <div className="row">
              <div className="col-lg-4 col-md-4 ">
                <p className={styles.summary}>SUMMARY</p>
                <div className={styles.thumbnail}>
                  <div className={styles.img}>
                    <img
                      className={styles.img}
                      src="https://muthoothonda.com/wp-content/uploads/2020/01/Honda_Activa_125-Side-Blue.jpg"
                      alt="bike"
                    />{" "}
                  </div>
                  <div>
                    <p className={styles.name}>Honda Activa 5G</p>
                  </div>
                </div>
              </div>
              <div className={`col-lg-8 col-md-8`}>
                <div className="pt-5">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className={styles.time}>8:30 am</p>
                      <p className={styles.date}>11 May 2022</p>
                    </div>
                    <div>
                      <p className={styles.to}>to</p>
                    </div>
                    <div>
                      <p className={`${styles.time}`} style={{textAlign: "right"}}>8:30 am</p>
                      <p className={styles.date} style={{textAlign: "right"}}>12 May 2022</p>
                    </div>
                  </div>
                  <hr className={styles.hr1} />
                  <hr className={styles.hr2} />
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div>
                      <p className={styles.summaryDes}>
                        Weekday - 2 days *{" "}
                        <span className={styles.rupees}> &#x20B9;</span>
                        650.0/day
                      </p>
                      <p className={styles.summaryDes}>Peak pricing</p>
                    </div>
                    <div>
                      {" "}
                      <p className={styles.summaryDes} style={{textAlign: "right"}}>
                        <span className={styles.rupees}> &#x20B9;</span> 1300.0
                      </p>
                      <p className={styles.summaryDes} style={{textAlign: "right"}}>
                        <span className={styles.rupees}> &#x20B9;</span> 0.0
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <p className={styles.totalAmount}>Total</p>
                    <p className={styles.totalAmount} style={{textAlign: "right"}}>
                      <span className={styles.rupees}> &#x20B9;</span> 1300.0
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      {" "}
                      <p className={styles.summaryDes}>Number of Helmet (?)</p>
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
                      <p className={styles.summaryDes}>Excess km charges (?)</p>
                    </div>
                    <div>
                      {" "}
                      <p className={styles.summaryDes} style={{textAlign: "right"}}>240km</p>
                      <p className={styles.summaryDes} style={{textAlign: "right"}}>
                        <span className={styles.rupees}> &#x20B9;</span> 4.0/km
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
                <span className={styles.rupees}> &#x20B9;</span> 1300.00
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className={styles.checkoutDes}>IGST (28%)</p>
              <p className={styles.checkoutDes}>
                <span className={styles.rupees}> &#x20B9;</span> 364.00
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className={styles.checkoutDes}>Refundable Deposit</p>
              <p className={styles.checkoutDes}>
                <span className={styles.rupees}> &#x20B9;</span> 2000.00
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className={styles.totalAmount}>Total Payable Amount</p>
              <p className={styles.totalAmount}>
                <span className={styles.rupees}> &#x20B9;</span> 3664.00
              </p>
            </div>
            <button className={styles.paymentBtn}>Make payment</button>
          </div>
        </div>
      </div>
    </>
  );
};
