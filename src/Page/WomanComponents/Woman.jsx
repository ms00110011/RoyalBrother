import React from "react";
import "./Woman.css";
import g1 from "../../Photo/wg1.jpg";
import g2 from "../../Photo/wg2.jpg";
import g3 from "../../Photo/wg3.jpg";
import g4 from "../../Photo/wg4.jpg";
import g5 from "../../Photo/wg5.jpg";
import g6 from "../../Photo/wg6.jpg";
export const Woman = () => {
  React.useEffect(() => {
    document.title = "Ladies, this is your chance for a license to thrill!"
 }, []);
  return (
    <div class="w-main">
      <div class="w-poster"></div>
      <div class="container-fluid w_flex1 my-2">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <table class="w-table">
              <tr class="w-row">
                <td class="w-title">Date</td>
                <td class="w-desc">Sun 27th March 2022</td>
              </tr>
              <tr class="w-row">
                <td class="w-title">Time</td>
                <td class="w-desc">06:00 AM to 02:00 PM</td>
              </tr>
              <tr class="w-row">
                <td class="w-title">Fee</td>
                <td class="w-desc">₹ 2499</td>
              </tr>
              <tr class="w-row">
                <td class="w-title">Venue</td>
                <td class="w-desc">Indiranagar Basketball Court</td>
              </tr>
            </table>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <p class="w_flex1r">Seats Available : 7</p>
          </div>
        </div>
      </div>
      <h6 class="my-4 fw-bold w-woman">
        #RBForWomen - Royal Brothers Introduces A Riding Initiative For Women
      </h6>
      <div class="w-description">
        <p>Hola Ladies,</p>
        <p class="fw-bold">
          Do you gawk your eyes out when you see women bikers on the road living
          their dreams?
        </p>
        <p class="fw-bold">Is motorcycling is your bucket list ?</p>
        <p class="fw-bold">Is it an enigma that you are in awe off?</p>
        <p>
          Then you are at the right place at the right time. Let the year 2022
          women's day be the year where you acquire this very important life
          skill and pave your way to the awesome world of motorcycling.
        </p>
        <p>
          You may be 18 or 68 if motorcycling is you long awaited dream then
          come join us on this magical journey, get introduced to the world of
          Bikes and BIKERS.
        </p>
        <p>
          <span class="fw-bold">Age is just a number</span> don't let it stop
          you from enabling yourself.{" "}
          <span class="fw-bold">Royal Brothers</span> brings on board{" "}
          <span class="fw-bold">The Endless Trail</span> to train and equip you
          with the right knowledge of MOTORCYCLES and MOTORCYCLING.
        </p>
        <p>
          Grab this unique opportunity to get introduced to various motorcycles,
          touch & feel them and get personalized time with trainers to learn the
          basics of MOTORCYCLING.
        </p>
        <p>
          <span class="fw-bold">Note:</span> MotorCycle for the training and
          Helmet will be provided by RB for participants.
        </p>
        <p class="my-5">
          <span class="fw-bold w-mr">Charges include</span> MotorCycle Training
          + MotorCycle for the training + Helmet + Breakfast
        </p>
        <hr class="w-hr" />
        <p class="fw-bold">RB Mandates</p>
        <p>
          {" "}
          &#8226;&nbsp;&nbsp; Participants need to be 18 years and older
          Participants need to carry their valid ID proof <br />
          &#8226;&nbsp;&nbsp; Participants will need to sign a Consent Form
          before the start of the session <br />
          &#8226;&nbsp;&nbsp; Participants will need to arrive at the location
          30 minutes prior to the start of the session
          <br />
          &#8226;&nbsp;&nbsp; Participants will need to wear appropriate attire.
          This includes full length pants/slacks/jeans, along with closed,
          unheeled shoes. <br />
          &#8226;&nbsp;&nbsp; Participants will need to carry additional snacks,
          if required, as well as their own water. <br />
        </p>
        <p class="my-4">
          For further details, kindly contact{" "}
          <span class="fw-bold">+917795687594</span> /{" "}
          <span class="fw-bold">+919019595595</span>
        </p>
      </div>
      <div class="w-grid">
        <div class="w-g1">
          <img class="img-fluid" src={g1} alt="" />
        </div>
        <div class="w-g2">
          <img class="img-fluid" src={g2} alt="" />
        </div>
        <div class="w-g3">
          <img class="img-fluid" src={g3} alt="" />
        </div>
        <div class="w-g4">
          <img class="img-fluid" src={g4} alt="" />
        </div>
        <div class="w-g5">
          <img class="img-fluid" src={g5} alt="" />
        </div>
        <div class="w-g6">
          <img class="img-fluid" src={g6} alt="" />
        </div>
      </div>
    </div>
  );
};
