import React from "react";
import styles from "./Payment.module.css";
import visa from "../../Photo/visa.png";
import american from "../../Photo/american.png";
import club from "../../Photo/club.png";
import rupay from "../../Photo/rupay.png";
export const Payment = () => {
  document.title = "https://www.royalbrothers.com/payment_initiate";

  return (
    <div className={`container ${styles.mainContainer}`}>
      <div className="row px-0">
        <div className={`px-0 col-lg-8 col-md-12 ${styles.method}`}>
          <p className={styles.title}>CHOOSE PAYMENT METHOD</p>
          <div className="row">
            <div className="d-flex align-items-start">
              <div className={`col-lg-3 col-md-3 ${styles.option}`}>
                {" "}
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className={`nav-link text-dark ${styles.button}`}
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Credit Card
                  </button>

                  <button
                    className={`nav-link text-dark ${styles.button}`}
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Debit Card
                  </button>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="container py-4">
                      <p className={styles.option}>
                        Enter your Credit card details
                      </p>
                      <div
                        className={styles.paymentOpt}
                        style={{ marginBottom: "25px" }}
                      >
                        <div>
                          <input type="radio" name="" id="" /> &nbsp;
                          <img src={visa} alt="visa" width="110" />
                        </div>
                        <div>
                          <input type="radio" name="" id="" />
                          &nbsp;
                          <img src={american} alt="american" width="45" />
                        </div>
                        <div>
                          <input type="radio" name="" id="" />
                          &nbsp;
                          <img src={club} alt="club" width="60" />
                        </div>
                        <div>
                          <input type="radio" name="" id="" />
                          &nbsp;
                          <img src={rupay} alt="rupay" width="45" />
                        </div>
                      </div>
                      <div className={`mb-4 ${styles.card}`}>
                        <div className={styles.option}>
                          <label htmlFor="">Card Number</label>
                          <br />
                          <input
                            className="my-1"
                            style={{
                              border: "none",
                              padding: "4px 13px",
                              width: "100%",
                              borderRadius: "3px",
                            }}
                            type="text"
                            placeholder="Enter your card number"
                          />
                        </div>
                        <div className={`my-2 ${styles.option}`}>
                          <label htmlFor="">Name on the card</label>
                          <br />
                          <input
                            className="my-1"
                            type="text"
                            style={{
                              border: "none",
                              padding: "4px 13px",
                              width: "100%",
                              borderRadius: "3px",
                            }}
                            placeholder="Enter name on the card"
                          />
                        </div>
                        <div className={`row ${styles.option} `}>
                          <div className="col-lg-6">
                            <label htmlFor="">Expiry</label>
                            <br />
                            <input
                              style={{
                                border: "none",
                                padding: "4px 13px",
                                width: "45%",
                                borderRadius: "3px",
                              }}
                              type="text"
                              placeholder="MM"
                              className="my-1"
                            />{" "}
                            &nbsp;
                            <input
                              style={{
                                border: "none",
                                padding: "4px 13px",
                                width: "45%",
                                borderRadius: "3px",
                              }}
                              type="text"
                              placeholder="YY"
                            />
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="">CVV</label>
                            <br />{" "}
                            <input
                              className="my-1"
                              style={{
                                border: "none",
                                padding: "4px 13px",
                                width: "100%",
                                borderRadius: "3px",
                              }}
                              type="text"
                              placeholder="CVV"
                            />
                          </div>
                        </div>
                      </div>
                      <button className={styles.paymentBtn}>
                        MAKE PAYMENT
                      </button>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="container py-4">
                      <p className={styles.option}>
                        Enter your Debit card details
                      </p>
                      <div className={styles.option}>
                        <select name="" id="" className={styles.cardOpt}>
                          <option value="">Choose your debit card type</option>
                          <option value="visa">Visa Cards</option>
                          <option value="maste">MasterCards</option>
                          <option value="sbi">SBI Maestro</option>
                          <option value="other">Other Maestro</option>
                          <option value="rupay">Rupay Card</option>
                        </select>
                      </div>
                      <div className={`mb-4 ${styles.card}`}>
                        <div className={styles.option}>
                          <label htmlFor="">Card Number</label>
                          <br />
                          <input
                            className="my-1"
                            style={{
                              border: "none",
                              padding: "4px 13px",
                              width: "100%",
                              borderRadius: "3px",
                            }}
                            type="text"
                            placeholder="Enter your card number"
                          />
                        </div>
                        <div className={`my-2 ${styles.option}`}>
                          <label htmlFor="">Name on the card</label>
                          <br />
                          <input
                            className="my-1"
                            type="text"
                            style={{
                              border: "none",
                              padding: "4px 13px",
                              width: "100%",
                              borderRadius: "3px",
                            }}
                            placeholder="Enter name on the card"
                          />
                        </div>
                        <div className={`row ${styles.option} `}>
                          <div className="col-lg-6">
                            <label htmlFor="">Expiry</label>
                            <br />
                            <input
                              style={{
                                border: "none",
                                padding: "4px 13px",
                                width: "45%",
                                borderRadius: "3px",
                              }}
                              type="text"
                              placeholder="MM"
                              className="my-1"
                            />{" "}
                            &nbsp;
                            <input
                              style={{
                                border: "none",
                                padding: "4px 13px",
                                width: "45%",
                                borderRadius: "3px",
                              }}
                              type="text"
                              placeholder="YY"
                            />
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="">CVV</label>
                            <br />{" "}
                            <input
                              className="my-1"
                              style={{
                                border: "none",
                                padding: "4px 13px",
                                width: "100%",
                                borderRadius: "3px",
                              }}
                              type="text"
                              placeholder="CVV"
                            />
                          </div>
                        </div>
                      </div>
                      <button className={styles.paymentBtn}>
                        MAKE PAYMENT
                      </button>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    ...
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-lg-4 col-md-12 px-0 ${styles.summary}`}>
          <p className={styles.title}>SUMMARY</p>
          <p className={`text-center py-3 mb-0 ${styles.option}`}>
            Total Payable Amount:
          </p>
          <p>
            {" "}
            <p className={`text-center ${styles.rupees}`}> &#x20B9;1300.00</p>
          </p>
        </div>
      </div>
      <div>
        <p className={`py-4 mb-0 ${styles.option}`}>
          <b>Note:</b> Making Payments on RoyalBrothers.com is 100% safe. Your
          transaction is processed through a secure https internet connection
          based on secure socket layer technology. Your payment details are only
          used for processing the transaction and never stored.
        </p>
      </div>
    </div>
  );
};
