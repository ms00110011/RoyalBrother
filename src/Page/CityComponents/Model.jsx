import React from "react";
import styles from "./Model.module.css";
export const Model = () => {
    let logo = "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/logo-b03af389c15608bf4fa52378f448a48a9c8f92f70242cc88340e971e7599d6ae.png"
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-lg`}>
          <div className="modal-content">
            <div className={`modal-header ${styles.header}`}>
               <div className={styles.logo}><img src={logo} alt="logo" width="110"/>&nbsp;&nbsp;| &nbsp;Bike Rental</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className={`modal-body ${styles.body}`}>
              <input
                className={styles.input}
                type="text"
           
                placeholder={`Search or type city to select clear`}
              />
              <div className="container">
                <div className="row">
                  <div className={`col-lg-2 ${styles.item1} ${styles.item}`}>
                    <p className={styles.cityName}>Agra</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item2}  ${styles.item}`}>
                    <p className={styles.cityName}>Ahmedabad</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item3}  ${styles.item}`}>
                    <p className={styles.cityName}>Alleppey</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item4}  ${styles.item}`}>
                    <p className={styles.cityName}>Amritsar</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item5}  ${styles.item}`}>
                    <p className={styles.cityName}>Andaman Nicobar</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item6}  ${styles.item}`}>
                    <p className={styles.cityName}>Bangalore Airport</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item7}  ${styles.item}`}>
                    <p className={styles.cityName}>Bangalore</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item8}  ${styles.item}`}>
                    <p className={styles.cityName}>Bangkok</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item9}  ${styles.item}`}>
                    <p className={styles.cityName}>Belagavi</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item10}  ${styles.item}`}>
                    <p className={styles.cityName}>Bhubaneswar</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item11}  ${styles.item}`}>
                    <p className={styles.cityName}>Bhuj</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item12}  ${styles.item}`}>
                    <p className={styles.cityName}>Calicut</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item13}  ${styles.item}`}>
                    <p className={styles.cityName}>Chandigarh</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item14}  ${styles.item}`}>
                    <p className={styles.cityName}>Chennai</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item15}  ${styles.item}`}>
                    <p className={styles.cityName}>Chikmagalur</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item16}  ${styles.item}`}>
                    <p className={styles.cityName}>Cochin</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item17}  ${styles.item}`}>
                    <p className={styles.cityName}>Coimbatore</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item18}  ${styles.item}`}>
                    <p className={styles.cityName}>Coorg - Kushalnagar</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item19}  ${styles.item}`}>
                    <p className={styles.cityName}>Coorg - Madikeri</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item20}  ${styles.item}`}>
                    <p className={styles.cityName}>Davanagere</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item21}  ${styles.item}`}>
                    <p className={styles.cityName}>Delhi</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item22}  ${styles.item}`}>
                    <p className={styles.cityName}>Dharamshala</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item23}  ${styles.item}`}>
                    <p className={styles.cityName}>Ganapati pule</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item24}  ${styles.item}`}>
                    <p className={styles.cityName}>Gandhinagar</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item25}  ${styles.item}`}>
                    <p className={styles.cityName}>Goa</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item26}  ${styles.item}`}>
                    <p className={styles.cityName}>Guntur</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item27}  ${styles.item}`}>
                    <p className={styles.cityName}>Gurugram</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item28}  ${styles.item}`}>
                    <p className={styles.cityName}>Guwahati</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item29}  ${styles.item}`}>
                    <p className={styles.cityName}>Hubli-Dharwad</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item30}  ${styles.item}`}>
                    <p className={styles.cityName}>Hyderabad</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item31}  ${styles.item}`}>
                    <p className={styles.cityName}>Indore</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item32}  ${styles.item}`}>
                    <p className={styles.cityName}>Jaipur</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item33}  ${styles.item}`}>
                    <p className={styles.cityName}>Jaisalmer</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item34}  ${styles.item}`}>
                    <p className={styles.cityName}>Jodhpur</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item35}  ${styles.item}`}>
                    <p className={styles.cityName}>Kolkata</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item36}  ${styles.item}`}>
                    <p className={styles.cityName}>Konark</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item37}  ${styles.item}`}>
                    <p className={styles.cityName}>Lucknow</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item38}  ${styles.item}`}>
                    <p className={styles.cityName}>Manali</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item39}  ${styles.item}`}>
                    <p className={styles.cityName}>Mangalore</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item40}  ${styles.item}`}>
                    <p className={styles.cityName}>Mohali</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item41}  ${styles.item}`}>
                    <p className={styles.cityName}>Mount Abu</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item42}  ${styles.item}`}>
                    <p className={styles.cityName}>Mumbai</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item43}  ${styles.item}`}>
                    <p className={styles.cityName}>Mysore</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item44}  ${styles.item}`}>
                    <p className={styles.cityName}>Nashik</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item45}  ${styles.item}`}>
                    <p className={styles.cityName}>Ooty</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item46}  ${styles.item}`}>
                    <p className={styles.cityName}>Pondicherry</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item47}  ${styles.item}`}>
                    <p className={styles.cityName}>Pune</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item48}  ${styles.item}`}>
                    <p className={styles.cityName}>Puri</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item49}  ${styles.item}`}>
                    <p className={styles.cityName}>Ranchi</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item50}  ${styles.item}`}>
                    <p className={styles.cityName}>Rishikesh</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item51}  ${styles.item}`}>
                    <p className={styles.cityName}>Sakleshpur</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item52}  ${styles.item}`}>
                    <p className={styles.cityName}>Siliguri</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item53}  ${styles.item}`}>
                    <p className={styles.cityName}>Srinagar</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item54}  ${styles.item}`}>
                    <p className={styles.cityName}>Surat</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item55}  ${styles.item}`}>
                    <p className={styles.cityName}>Tirupati</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item56}  ${styles.item}`}>
                    <p className={styles.cityName}>Trivandrum</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item57}  ${styles.item}`}>
                    <p className={styles.cityName}>Udaipur</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item58}  ${styles.item}`}>
                    <p className={styles.cityName}>Udupi - manipal</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item59}  ${styles.item}`}>
                    <p className={styles.cityName}>Vijayawada</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className={`col-lg-2 ${styles.item60}  ${styles.item}`}>
                    <p className={styles.cityName}>Vizag</p>
                  </div>
                </div>
                <div className="row my-4">
                  <div className={`col-lg-2 ${styles.item61}  ${styles.item}`}>
                    <p className={styles.cityName}>Wayanad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
