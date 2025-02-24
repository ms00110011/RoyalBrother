import React from "react";
import styles from "./User.module.css";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
export const User = () => {
  function file(){
    console.log("hello")
  }
  document.title = "Profile | Royalbrothers.com"


  let {name,mobile,email} = useSelector(
    (state)=>state.user)



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
                  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/user-profile-menu-70666577f1d7fbe6bba1f46ceacdb2e4abdbb2575014670cf9afbfbf35376c25.png"
                  alt="profile"
                />
              </div>
              <p className={styles.name}>{name}</p>
              <p className={styles.no}>91 {mobile}</p>
              <p className={styles.email}>
                {email} &nbsp; <EditIcon sx={{ fontSize: 12 }} />
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
              <p className={styles.license}>Driving License</p>
              <div className={styles.uploadD}>
                <div className={styles.add} onClick={file}>
                  <div className={styles.addIcon}>+</div>
                </div>
                <div className={styles.add}>
                  <div className={styles.addIcon}>+</div>
                </div>
                <div className={styles.add}>
                  <div className={styles.addIcon}>+</div>
                </div>
              </div><br />
              <p className={styles.license}>ID Proof</p>
              <div className={styles.uploadD}>
                <div className={styles.add}>
                  <div className={styles.addIcon}>+</div>
                </div>
                <div className={styles.add}>
                  <div className={styles.addIcon}>+</div>
                </div>
                <div className={styles.add}>
                  <div className={styles.addIcon}>+</div>
                </div>
              </div><br />
              <button className={styles.uploadBtn}>UPLOAD</button>
              <p className={styles.accountStatus}>Account Status</p>
              <p className={styles.awaiting}>
                <RadioButtonCheckedIcon /> Awaiting document upload
              </p>
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
