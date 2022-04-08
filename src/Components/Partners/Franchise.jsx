import React from "react";
import "./Franchise.css";
import store1 from "../../Photo/store1.png";
import store2 from "../../Photo/store2.png";
import store3 from "../../Photo/store3.png";
import store4 from "../../Photo/store4.png";
import store5 from "../../Photo/store5.png";
import flex1 from "../../Photo/flex1.png";
import flex2 from "../../Photo/flex2.png";
import flex3 from "../../Photo/flex3.jpg";
import flex4 from "../../Photo/flex4.png";
import flex5 from "../../Photo/flex5.png";
import flex6 from "../../Photo/flex6.png";
export const Franchise = () => {
  React.useEffect(() => {
    document.title = "Partner with Us | Royalbrothers.com";
  }, []);

  return (
    <div class="f-main">
      <div class="img-gradient">
        <div class="poster">
          <p class="own">Own a franchise</p>
          <div class="flex-1">
            <p class="partner">Partner with India's Largest</p>
            <p class="partner">Bike Rental Company</p>
            <button class="apply">Apply for franchise</button>
          </div>
        </div>
      </div>
      <h1 class="what">What is in store for you</h1>
      <div class="underline"></div>
      <div class="container-fluid p-5 mg">
        <div class="row d-flex align-content-center align-items-center order">
          <div class="col-lg-7 col-md-12 p-3 brand">
            <h4 class="fw-bold">A Brand trusted by many</h4>
            <p class="my-3 text-muted">
              {" "}
              1,00,000+ customers served across the nation in 43 different
              cities. Our consistency in quality can be seen by the 4.5+ star
              reviews we’ve received across all social channels.
            </p>
          </div>
          <div class="col-lg-5 col-md-12 img p-4">
            <img src={store1} alt="store1"></img>
          </div>
        </div>
      </div>
      <div class="container-fluid p-5 mg">
        <div class="row d-flex align-content-center align-items-center">
          <div class="col-lg-5 col-md-12 img p-4">
            <img src={store2} alt="store2"></img>
          </div>
          <div class="col-lg-7 col-md-12 p-4 brand-2">
            <h4 class="fw-bold">
              Leverage our biggest strengths for your gains
            </h4>
            <p class="my-3 text-muted">
              We are the only company in this industry to hold license to
              operate in 7 states in India. Additionally, our team is constantly
              looking to add more locations and expand in different geographical
              areas that have a promising future in the{" "}
              <span
                class="text-primary curser
                      "
              >
                read more &#8595;
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="container-fluid p-5 mg">
        <div class="row d-flex align-content-center align-items-center order">
          <div class="col-lg-7 col-md-12 p-4 brand">
            <h4 class="fw-bold">Customers turned brand advocates</h4>
            <p class="my-3 text-muted">
              The brand promise of ensuring superior quality and uncompromised
              customer service has made our customers turn into brand advocates
              in no time. As a testament to this truth, you can find us being
              liked and followed by thousands of people{" "}
              <span
                class="text-primary curser
                     "
              >
                read more &#8595;
              </span>
            </p>
          </div>
          <div class="col-lg-5 col-md-12 img p-4">
            <img src={store3} alt="store1"></img>
          </div>
        </div>
      </div>
      <div class="container-fluid p-5 mg">
        <div class="row d-flex align-content-center align-items-center">
          <div class="col-lg-5 col-md-12 img p-4">
            <img src={store4} alt="store2"></img>
          </div>
          <div class="col-lg-7 col-md-12 p-4 brand-2">
            <h4 class="fw-bold">
              Technology-driven approach to optimize efficiency
            </h4>
            <p class="my-3 text-muted">
              Our team has built highly sophisticated operational tools that
              help in easing out our end to end operations. Our analytical tools
              determine the demand and supply through which we regulate our
              inventory time and again. We've also set-up tools{" "}
              <span
                class="text-primary curser
                     "
              >
                read more &#8595;
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="container-fluid p-5">
        <div class="row d-flex align-content-center align-items-center order">
          <div class="col-lg-7 col-md-12 p-4 brand">
            <h4 class="fw-bold">
              Unbeatable customer service and operational activities.
            </h4>
            <p class="my-3 text-muted">
              Our highly competent customer service team is available 24*7 to
              provide a hassle-free service and immediate assistance to
              customers. An added advantage is that our large network across
              India can be leveraged to provide immediate roadside{" "}
              <span
                class="text-primary curser
                     "
              >
                read more &#8595;
              </span>
            </p>
          </div>
          <div class="col-lg-5 col-md-12 img p-4">
            <img src={store5} alt="store1"></img>
          </div>
        </div>
      </div>
      <div class="apply-2-wrapper">
        <button class="apply-2">Apply for franchise</button>
      </div>
      <div class="d-flex justify-content-between flex-2">
        <div class="flex2-child">
          <img class="flex2-img" src={flex1} alt="flex1"></img>
        </div>
        <div class="flex2-child">
          <img class="flex2-img" src={flex2} alt="flex2"></img>
        </div>
        <div class="flex2-child">
          {" "}
          <img class="flex2-img" src={flex3} alt="flex3"></img>
        </div>
      </div>
      <h1 class="what">Why Royal Brothers?</h1>
      <div class="under_line2"></div>
      <div class="flex-3">
        <div class="flex-31 shadow">
          <img src={flex4} class="flex-3-img"></img>
          <p class="text-center fw-normal">Licence to operate in 7 states</p>
        </div>
        <div class="flex-31 shadow">
          <img src={flex5} class="flex-3-img"></img>
          <p class="text-center fw-normal">100k+ Bookings served and counting</p>
        </div>
        <div class="flex-31 shadow">
          <img src={flex6} class="flex-3-img"></img>
          <p class="text-center fw-normal">15 million kms served</p>
        </div>
      </div>
    </div>
  );
};
