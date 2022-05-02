import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsPanel({ name, img, priceHour, kmlimit, exkm }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab style={{ fontSize: "13px" }} label="Hourly" {...a11yProps(0)} />
          <Tab style={{ fontSize: "13px" }} label="7 days" {...a11yProps(1)} />
          <Tab style={{ fontSize: "13px" }} label="15 days" {...a11yProps(2)} />
          <Tab style={{ fontSize: "13px" }} label="30 days" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Mon-Thu
          </h6>
          <div>
            <p style={{ color: "black", fontSize: "9px", textAlign: "left" }}>
              (Min 24 hrs booking)
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>
                Booking Time (0- 24 hrs)
              </p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {priceHour}/hr
              </h6>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>
                Booking Time ( After 24 hrs)
              </p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {priceHour}/hr
              </h6>
            </div>
          </div>
        </div>

        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Fri-Sun
          </h6>
          <div>
            <p style={{ color: "black", fontSize: "9px", textAlign: "left" }}>
              (Min 24 hrs booking)
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>
                Booking Time ( After 24 hrs)
              </p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {priceHour}/hr
              </h6>
            </div>
          </div>
        </div>

        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Extras
          </h6>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>km Limit</p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {kmlimit}/hr
              </h6>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>
                Excess Km charge
              </p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {exkm}/hr
              </h6>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Rental Charges
          </h6>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>
                Price for 7 days
              </p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {priceHour * 24 * 7}
              </h6>
            </div>
          </div>
        </div>

        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Km Limit
          </h6>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px",width:"60%", textAlign:"left" }}>
                No of kms in 7 days that can be travelled without extra charges
              </p>
              <h6 style={{ fontSize: "11px" }}>720 Km</h6>
            </div>
          </div>
        </div>

        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Excess Km Charges
          </h6>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>
                Charges beyond the km limit
              </p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {exkm}/km
              </h6>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Rental Charges
          </h6>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>
                Price for 15 days
              </p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {priceHour * 24 * 15}
              </h6>
            </div>
          </div>
        </div>

        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Km Limit
          </h6>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px",width:"65%", textAlign:"left" }}>
                No of kms in 15 days that can be travelled without extra charges
              </p>
              <h6 style={{ fontSize: "11px" }}>1200 Km</h6>
            </div>
          </div>
        </div>

        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Excess Km Charges
          </h6>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>
                Charges beyond the km limit
              </p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {exkm}/km
              </h6>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Rental Charges
          </h6>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>
                Price for 30 days
              </p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {priceHour * 24 * 30}
              </h6>
            </div>
          </div>
        </div>

        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Km Limit
          </h6>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px",width:"65%", textAlign:"left" }}>
                No of kms in 30 days that can be travelled without extra charges
              </p>
              <h6 style={{ fontSize: "11px" }}>2000 Km</h6>
            </div>
          </div>
        </div>

        <div>
          <h6
            style={{ fontSize: "12px", textAlign: "left", marginTop: "25px",fontWeight:"bold" }}
          >
            Excess Km Charges
          </h6>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "black", fontSize: "11px" }}>
                Charges beyond the km limit
              </p>
              <h6 style={{ fontSize: "11px" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "small" }} />
                {exkm}/km
              </h6>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
