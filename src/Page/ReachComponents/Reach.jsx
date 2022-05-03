import React from "react";
import styles from "./Reach.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
export const Reach = () => {
    
  return (
    <div className={styles.mainContainer}>
      <div className={styles.reachContainer}>
        <div className={styles.title}>Reach Us</div>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-7">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
                <LocationOnIcon />
              </div>
              <div className={`col-lg-9 col-md-9 col-sm-9 col-9 ${styles.contactDes}`}>
                Royal Brothers <br /> #501, Bhoomi plaza, 4th Cross Indira Nagar
                2nd stage, CMH road, Next to Indiranagar metro station
                Bangalore, Karnataka 560 038
              </div>
            </div>

            <div className="row my-4">
              <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
                <PhoneIcon />
              </div>
              <div className={`col-lg-9 col-md-9 col-sm-9 col-9 ${styles.contactDes}`}>
                <a className={styles.link} cl href="tel:+917795687594">
                  +917795687594
                </a>{" "}
                /{" "}
                <a className={styles.link} href="tel:+919019595595">
                  +919019595595
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-3  text-center">
                <WhatsAppIcon />
              </div>
              <div className={`col-lg-9 col-md-9 col-sm-9 col-9 ${styles.contactDes} ${styles.link}`}>
                <a
                  className={styles.link}
                  href="https://wa.me/919019595595"
                  target="_blank"
                >
                  Chat now
                </a>{" "}
              </div>
            </div>

            <div className="row my-4">
              <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
                <EmailIcon />
              </div>
              <div className={`col-lg-9 col-md-9 col-sm-9 col-9 ${styles.contactDes}`}>
                Enquiries - support@royalbrothers.comGrievances -
                ceo@royalbrothers.com
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-12 bg-primary px-4">a</div>
        </div>
        <div className="row px-4 mb-5">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <input
              type="text"
              placeholder="Name"
              className={styles.inputField}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <input
              type="text"
              placeholder="Email"
              className={styles.inputField}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <input
              type="text"
              placeholder="Mobile"
              className={styles.inputField}
            />
          </div>
        </div>
        <div className="row px-4 mb-4">
          <div className="col-lg-12">
            <input
              type="text"
              placeholder="Comment"
              className={`${styles.inputField} ${styles.comment}`}
            />
          </div>
        </div>
        <div className="row px-4">
          <div className="col-lg-12">
            <button className={styles.submitBtn}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
