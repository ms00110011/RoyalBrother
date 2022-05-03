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
        style={{ border: "none", backgroundColor: "white" }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{ border: "none", backgroundColor: "white" }}
        >
          <Typography
            style={{
              fontSize: "13px",
              border: "none",
              backgroundColor: "white",
            }}
          >
            What is RB?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "13px",
              border: "none",
              borderTop: "none !important",
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
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={styles.text}>
            What makes RB special?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
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
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>How does RB work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            Click on (this link here). You will be redirected to our page
            showing various cities. Select your city, date and time as per your
            convenience. Choose your bike from our wide range of available bikes
            and pick up locations. You will be asked to login/signup which can
            be done in very simple steps. Your reservation can only be confirmed
            post payment and document uploading.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            What documents need to be uploaded?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            For Indian Customers The following documents will be needed to rent
            a vehicle and the picture of the same needs to be uploaded. ●Driving
            License: Original Indian Driving license is required and a learner
            license is not applicable. ●Aadhar Card: Original Aadhar is required
            and if your mobile number updated in Aadhar is not as your
            registered number then upload an additional document (PAN or
            Passport) For International Customers. A valid driving license from
            their home country with an international driving permit is necessary
            along with a valid visa and passport. Please carry the Original
            documents for verification at the time of pickup. Do I need to
            submit original documents? Except Bangalore, customers will have to
            submit the original driving license at the time of pickup and it
            will be returned at the time of returning the vehicle. Note: ● If
            required, PAN or Passport will be requested as an additional
            document. ● If the required documents are not submitted or uploaded
            then it may lead to cancellation with a cancellation charge of 37.5%
            of the booking amount. ● Except for Bangalore, submitting the
            document is mandatory for all other cities.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            Is fuel included in Tariff?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            The booking amount includes only the rental charges and the GST.
            Fuel is not included in the rental charges, however, sufficient fuel
            will be provided to reach the nearest petrol station. *Note-: We
            will not be able to provide a refund In case of extra fuel leftover
            at the time of returning the vehicle.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            Is there any limit on the number of kilometres?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            Yes. We have a limit on km per 24 hours for all bikes and scooters.
            The km limit is defined on our tariff page with respect to each city
            . Any extra Km on a bike or scooter attracts a charge per km and it
            varies according to city.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            Do I have to pay a deposit?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            Yes. Most cities have a refundable deposit of ₹ 1,000 for bikes and
            ₹ 500 for scooters. Some cities have a different rate and the same
            will be shown on the booking summary page. The superbikes attract a
            minimum deposit of INR 3,000 and upwards.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            When can we expect the refund?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            The refund usually takes 5 – 7 working days to reflect in the source
            account excluding Saturdays, Sundays and Bank holidays from the date
            of invoice.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            Is there any penalty for late return?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            Condition applicable for Konark, Davanagere, Calicut, Gurugram,
            Tirupati, Surat, Bangalore Airport, Belagavi, Hubli-Dharwad,
            Ahmedabad, Wayanad, Mangalore, Udupi - manipal, Alleppey ,
            Bangalore, Bhubaneswar, Guntur, Cochin, Vizag, Hyderabad,
            Chikmagalur, Coorg - Kushalnagar, Trivandrum, Jaipur, Mysore,
            Vijayawada, Coorg - Madikeri A fee of Rs.100 along with 2X of the
            rental charges per hour will be charged for vehicle being returned
            after the grace period of 30 mins. Condition applicable for other
            cities A fee of 200 of the rental charges per hour will be charged
            for vehicle being returned after the grace period of 30 mins.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            How do I cancel my booking?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            You have to drop us a mail at support@royalbrothers.com. We will
            cancel your booking and process your refund right away.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            What is the cancellation policy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            The security deposit will always be refunded back irrespective of
            the cancellation if paid If there is a cancellation, then the
            following policy will be applied depending on cancellation and
            pickup time. No show - 100% deduction and only security deposit will
            be refunded. Between 0 - 6 hrs of the pick up time - 75% rental
            charges will be withheld and security deposit will be refunded.
            Between 6-24 hrs of the pick up time: 50% rental charges will be
            withheld. Between 24-72 hrs of the pick up time: 25% rental charges
            will be withheld. 72 hrs or more prior to the pick up time: 10%
            rental charges will be withheld. If we cancel the booking from our
            side due to any booking issues, technical error, non-availability of
            the vehicle, we will return the entire rental amount and the
            deposit.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            Who should I contact to pick up the vehicle and how?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            The contact number of our fleet executive will be shared with you
            after the booking is successfully completed via SMS and Email. You
            can also contact our support team by calling or sending a WhatsApp
            message at +91- 9019595595, in case you have not received the fleet
            executive details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            Can I pick and drop the vehicle at different locations?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
            We have multiple locations to choose a pick and drop. You can pick
            the vehicle from any of your preferred locations however it has to
            dropped back to the same location. We currently do not have inter or
            intra state drop options.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={styles.text}>
            Is there any limit on the age of the rider?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.text}>
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
