import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./Faq.module.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export function Faq() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.faq}>
      <p className={styles.title}>FAQ's</p>
      <hr className={styles.hr} />
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            What is RB?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            RB is the most affordable, easiest and convenient way of renting a
            bike across India. An easier mode of riding, exploring, commuting.
            that gives you accessibility beyond any other means.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            What makes RB special?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Prominent locations across our 30 cities in India and 3 in Thailand
            with 20 various bike models, needless to mention our great customer
            service experience is a proof enough of our zeal to make a way into
            your heart and daily life.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            How does RB work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Click on (
            <a className={styles.link} href="https://www.royalbrothers.com/">
              this link here
            </a>
            ). You will be redirected to our page showing various cities. Select
            your city, date and time as per your convenience. Choose your bike
            from our wide range of available bikes and pick up locations. You
            will be asked to login/signup which can be done in very simple
            steps. Your reservation can only be confirmed post payment and
            document uploading.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel4d-content"
          id="panel4d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            What documents need to be uploaded?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            <span className={styles.bold}>For Indian Customers</span> <br /> The
            following documents will be needed to rent a vehicle and the picture
            of the same needs to be uploaded. <br />
            <span className={styles.bold}> ●Driving License: </span>Original
            Indian Driving license is required and a learner license is not
            applicable. <br />{" "}
            <span className={styles.bold}> ●Aadhar Card:</span> Original Aadhar
            is required and if your mobile number updated in Aadhar is not as
            your registered number then upload an additional document (PAN or
            Passport) <br /> <br />
            <span className={styles.bold}> For International Customers.</span>
            <br /> A valid driving license from their home country with an
            international driving permit is necessary along with a valid visa
            and passport.
            <br />
            <br />
            <span className={styles.bold}>
              Please carry the Original documents for verification at the time
              of pickup.
            </span>{" "}
            <br />
            <br />
            <span className={styles.bold}>
              {" "}
              Do I need to submit original documents?
            </span>
            <br /> Except Bangalore, customers will have to submit the original
            driving license at the time of pickup and it will be returned at the
            time of returning the vehicle. <br />
            <br />
            <span className={styles.bold}>Note:</span>
            <br /> ● If required, PAN or Passport will be requested as an
            additional document.
            <br /> ● If the required documents are not submitted or uploaded
            then it may lead to cancellation with a cancellation charge of 37.5%
            of the booking amount.
            <br /> ● Except for Bangalore, submitting the document is mandatory
            for all other cities.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel5d-content"
          id="panel5d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Is fuel included in Tariff?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            The booking amount includes only the rental charges and the GST.{" "}
            <br />
            <br />
            Fuel is not included in the rental charges, however, sufficient fuel
            will be provided to reach the nearest petrol station.
            <br />
            <br /> *Note-: We will not be able to provide a refund In case of
            extra fuel leftover at the time of returning the vehicle.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel6d-content"
          id="panel6d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Is there any limit on the number of kilometres?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Yes. We have a limit on km per 24 hours for all bikes and scooters.
            The km limit is defined on our tariff page with respect to each city
            . Any extra Km on a bike or scooter attracts a charge per km and it
            varies according to city.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel7d-content"
          id="panel7d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Do I have to pay a deposit?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Yes. Most cities have a refundable deposit of ₹ 1,000 for bikes and
            ₹ 500 for scooters. Some cities have a different rate and the same
            will be shown on the booking summary page. The superbikes attract a
            minimum deposit of INR 3,000 and upwards.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel8d-content"
          id="panel8d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            When can we expect the refund?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            The refund usually takes 5 – 7 working days to reflect in the source
            account excluding Saturdays, Sundays and Bank holidays from the date
            of invoice.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel9d-content"
          id="panel9d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Is there any penalty for late return?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            <span className={styles.bold}>
              {" "}
              Condition applicable for Konark, Davanagere, Calicut, Gurugram,
              Tirupati, Surat, Bangalore Airport, Belagavi, Hubli-Dharwad,
              Ahmedabad, Wayanad, Mangalore, Udupi - manipal, Alleppey ,
              Bangalore, Bhubaneswar, Guntur, Cochin, Vizag, Hyderabad,
              Chikmagalur, Coorg - Kushalnagar, Trivandrum, Jaipur, Mysore,
              Vijayawada, Coorg - Madikeri
            </span>{" "}
            <br /> A fee of Rs.100 along with 2X of the rental charges per hour
            will be charged for vehicle being returned after the grace period of
            30 mins. <br />
            <br />{" "}
            <span className={styles.bold}>
              {" "}
              Condition applicable for other cities
            </span>{" "}
            <br /> A fee of 200 of the rental charges per hour will be charged
            for vehicle being returned after the grace period of 30 mins.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel10d-content"
          id="panel10d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            How do I cancel my booking?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            You have to drop us a mail at support@royalbrothers.com. We will
            cancel your booking and process your refund right away.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel11"}
        onChange={handleChange("panel11")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel11d-content"
          id="panel11d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            What is the cancellation policy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
             <span className={styles.bold}>The security deposit will always be refunded back irrespective of
            the cancellation if paid</span> <br /> If there is a cancellation, then the
            following policy will be applied depending on cancellation and
            pickup time.<br /> <br />  No show - 100% deduction and only security deposit will
            be refunded.<br />  Between 0 - 6 hrs of the pick up time - 75% rental
            charges will be withheld and security deposit will be refunded.<br /> 
            Between 6-24 hrs of the pick up time: 50% rental charges will be
            withheld.<br />  Between 24-72 hrs of the pick up time: 25% rental charges
            will be withheld. <br /> 72 hrs or more prior to the pick up time: 10%
            rental charges will be withheld.<br /> <br />  If we cancel the booking from our
            side due to any booking issues, technical error, non-availability of
            the vehicle, we will return the entire rental amount and the
            deposit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel12"}
        onChange={handleChange("panel12")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel12d-content"
          id="panel12d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Who should I contact to pick up the vehicle and how?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            The contact number of our fleet executive will be shared with you
            after the booking is successfully completed via SMS and Email. <br /><br /> You
            can also contact our support team by calling or sending a WhatsApp
            message at +91- 9019595595, in case you have not received the fleet
            executive details.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel13"}
        onChange={handleChange("panel13")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel13d-content"
          id="panel13d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Can I pick and drop the vehicle at different locations?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            We have multiple locations to choose a pick and drop. You can pick
            the vehicle from any of your preferred locations however it has to
            dropped back to the same location. We currently do not have inter or
            intra state drop options.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel14"}
        onChange={handleChange("panel14")}
        style={{ border: "none" }}
      >
        <AccordionSummary
          aria-controls="panel14d-content"
          id="panel14d-header"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Is there any limit on the age of the rider?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
            }}
          >
            Yes! We love the fact that you have the passion to ride and explore
            but you have to be 18 years old or above with a valid DL to ride
            with us. Superbike fans have to be over and above 21 to rent with
            us.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
