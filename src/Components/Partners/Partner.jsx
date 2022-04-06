import React from "react";
import styles from "./Partner.module.css";
import pic from "../../Photo/bike.jpg";
import first from "../../Photo/first.png";
import second from "../../Photo/second.png";
import third from "../../Photo/third.png";
import gt from "../../Icon/gt.png";
import flex4 from "../../Photo/flex4.png";
import flex5 from "../../Photo/flex5.png";
import flex6 from "../../Photo/flex6.png";

export const Partner = () => {
  return (
    <div className={styles.partner}>
      <div>
        <div className={styles.first_title}>Earn with us</div>
        <img src={pic} alt="bike" className={styles.pic} />
      </div>

      <div class="d-flex flex-column align-items-center my-5">
        <div>
          <h2 class="mb-4 fw-bolder">How it works</h2>
          <div class={styles.under_line}></div>
        </div>
        <div>
          <p className={styles.desc}>
            Invest in Royal Brothers bikes and start earning every month
          </p>
        </div>
        <div className={styles.flex}>
          <div class="bg-white p-2">
            <img src={first} className={styles.first} alt="bike" />
            <h6>Invest on RB Bikes</h6>
          </div>
          <div>
            <img src={gt} className={styles.icon} alt="" />
          </div>
          <div class="bg-white">
            <img src={second} className={styles.first} alt="bike" />
            <h6>Get into contract with Royal Brothers</h6>
          </div>
          <div>
            <img src={gt} className={styles.icon} alt="" />
          </div>
          <div class="bg-white">
            <img src={third} className={styles.first} alt="bike" />
            <h6>Get paid every month</h6>
          </div>
        </div>
        <div className={styles.Pearning}>
          <button className={styles.earning}>Start Earning</button>
        </div>
        <h1 className={styles.heading}>FAQ's</h1>
        <div className={styles.under_line2}></div>
      </div>
      <div id="accordion" className={styles.accordion}>
        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="btn"
              data-bs-toggle="collapse"
              href="#first"
              className={styles.fafs}
            >
              What am I investing on?
            </a>
            <a
              class="btn"
              data-bs-toggle="collapse"
              href="#first"
              className={styles.fafs1}
            >
              <i class="fa-solid fa-angle-up"></i>
            </a>
          </div>
          <div
            id="first"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              You’ll be investing in buying new bikes which will be rented out
              through Royal Brothers – Bike Rentals.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseTwo"
              className={styles.fafs}
            >
              How much will I earn?
            </a>
          </div>
          <div
            id="collapseTwo"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              We share the revenue of the bike at a ratio of 70:30 (70% for you
              and 30% for Royal brothers). As the bike will be placed in
              locations where the demand is well-evaluated, you can expect
              maximum bookings and hence a good return on investment.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseThree"
              className={styles.fafs}
            >
              How will I get paid?
            </a>
          </div>
          <div
            id="collapseThree"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              We will credit your earnings every month to your bank account.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseFour"
              className={styles.fafs}
            >
              How will I track my earnings?
            </a>
          </div>
          <div
            id="collapseFour"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              We will share access to RB Partner App through which you can track
              your earnings
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseFive"
              className={styles.fafs}
            >
              Which bikes should I buy?
            </a>
          </div>
          <div
            id="collapseFive"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              We will be estimating and informing you which bike model can earn
              your best returns. This is based on the demand in a given
              location. So, you can suitably make the decision on buying the
              vehicles.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseSix"
              className={styles.fafs}
            >
              Will the bikes be registered under my name?
            </a>
          </div>
          <div
            id="collapseSix"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              No, as per the Motor vehicles Act, one should have a valid license
              to rent out the vehicles. Hence, the vehicle must be registered
              under the company’s (Royal Brothers) name to rent it out. However,
              there will be an agreement where we mention that the ownership of
              vehicle lies with you.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseSeven"
              className={styles.fafs}
            >
              What is the term of the agreement?
            </a>
          </div>
          <div
            id="collapseSeven"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              The agreement is for a term period of 3 years.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseEight"
              className={styles.fafs}
            >
              What will happen after 3 years?
            </a>
          </div>
          <div
            id="collapseEight"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              The vehicle will be handed over to you. It can be later be re-sold
              or could be used for personal usage. If required, we will assist
              you in re-selling of the vehicle.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseNine"
              className={styles.fafs}
            >
              Who will handle the registration process?
            </a>
          </div>
          <div
            id="collapseNine"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              A team of experts at Royal Brothers will take care of everything
              from helping you purchase the bike to registration and onboarding.
              You’ll be updated at every step of the process.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseTen"
              className={styles.fafs}
            >
              Who will take care of maintenance of the bike?
            </a>
          </div>
          <div
            id="collapseTen"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              Our in-house maintenance team will take care of all the bike
              maintenance issues. However, the maintenance charges will have to
              borne by you.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" className={styles.faq}>
            <a
              class="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseEleven"
              className={styles.fafs}
            >
              What happens if the bike meets with an accident or gets stolen?
            </a>
          </div>
          <div
            id="collapseEleven"
            class="collapse show"
            data-bs-parent="#accordion"
            className={styles.fabg}
          >
            <div class="card-body" className={styles.faa}>
              Royal Brothers will take care of all the issues and will also
              claim the insurance, if need be.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Pearning}>
        <button className={styles.earning}>Start Earning</button>
      </div>
      <h1 class="what">Why Royal Brothers?</h1>
      <div className={styles.under_line2}></div>
      <div class="flex-3">
        <div class="flex-31 bg-white">
          <img src={flex4} class="flex-3-img"></img>
          <p class="text-center">Licence to operate in 7 states</p>
        </div>
        <div class="flex-31 bg-white">
          <img src={flex5} class="flex-3-img"></img>
          <p class="text-center">100k+ Bookings served and counting</p>
        </div>
        <div class="flex-31 bg-white">
          <img src={flex6} class="flex-3-img"></img>
          <p class="text-center">15 million kms served</p>
        </div>
      </div>
    </div>
  );
};
