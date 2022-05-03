import React from "react";
import styles from "./User.module.css";
export const User = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <div className={styles.mainContainer}>
        <div className="row">
          {/* left side */}
          <div className="col-lg-4 col-md-4 col-sm-12 bg-white">
            <div className={styles.userDetail}>
              <p className={styles.profile}>PROFILE</p>
              <div className={styles.imgContainer}>
                <img
                  className={styles.avtar}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
                  alt="profile"
                />
              </div>
              <p className={styles.name}>Manoj</p>
              <p className={styles.no}>91 8435925392</p>
              <p className={styles.email}>
                amnishad0512@gmail.com
                <i class="material-icons emaileditbtn"></i>
              </p>
              <p className={styles.credit}>Available Travel Credits : 0</p>
            </div>

            <div className={styles.wallet}>
              <p className={styles.balance}>My Wallet Balance :0.0</p>
              <button className={styles.balanceBtn}>Check My Wallet</button>
            </div>
          </div>
          {/* right side */}
          <div className={`col-lg-8 col-md-8 col-sm-12 ${styles.upload}`}>
            <div className={styles.uploadTop}>
              <p className={styles.uploadDoc}>UPLOAD DOCUMENTS</p>
              <button className={styles.uploadBtn}>UPLOAD</button>
              <p className={styles.accountStatus}>Account Status</p>
              <p className={styles.awaiting}>Awaiting document upload</p>
            </div>
            <div className={styles.guidelinesContainer}>
              <p className={styles.guidelines}>Guidelines to Follow</p>
              <p className={styles.points}>
                * Upload both sides of the DL in appropriate fields. <br /> *
                Please upload the picture of the original DL and Aadhar card.
                <br /> * ID and Address proof can be an Adhaar card or Passport.
                <br /> * Please ensure that the uploaded images of the documents
                are clear and visible for faster approval.
                <br /> * Passport is mandatory for hiring superbikes.
                <br /> * If you have signed up on the Royal brothers platform
                from a different phone number than the phone number used for
                your Aadhaar card, then please upload any of the following
                documents additionally - PAN and Passport.
                <br /> * Except Bangalore, customers will have to submit the
                original driving license at the time of pickup, it will be
                returned at the time of returning the vehicle.
                <br /> * Learner License, Photocopy, Color Xerox, Screenshots,
                Scanned Copies are not Applicable.
                <br /> * Please carry the Original documents for verification at
                the time of pickup.
                <br /> * Vehicle will be issued only as per the Driving license
                eligibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
