import { Button } from "@mui/material";
import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";

export const ProductDetails = () => {
  const { id } = useParams();
  const [shop, setShop] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch(`http://localhost:3001/tariff/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setShop(res);
        console.log(res);
      });
  }, []);


  //   if(shop.name===undefined) {
  //      return <Navigate to="*" />
  //     // navigate("*")
  //   }

  return (
    <div>
      <div className={styles.summaryWrapper}>
        <h5 style={{ color: "black", padding: "10px" }}>Summary</h5>

        <div className={styles.detailsWrapper}>
          <div className={styles.imgWrapper}>
            <img
              style={{ width: "100%" }}
              src={shop.img}
              alt=""
            />
            <h3 style={{ textAlign: "center", padding: "20px" }}>{shop.name}</h3>
          </div>

            <div className={styles.textWrapper}>


            <div className={styles.duration}>
          <div className={styles.bow}>
            <div style={{marginRight:"180px"}}>09:00 am</div>
            <div>07:00 pm</div>
          </div>
          <div className={styles.bow}>
            <div style={{ fontWeight: "lighter" ,marginRight:"160px"}}>11 Apr 2022</div>
            <div style={{ fontWeight: "lighter" }}>24 Apr 2022</div>
          </div>
        </div>

        <hr style={{width:"100%", border:"1px solid gray",marginTop:"30px"}} />
        <hr style={{width:"100%", border:"1px solid gray",color:"gray"}} />

        <div className={styles.duration}>
          <div className={styles.bow}>
            <div style={{marginRight:"180px",fontSize:"12px",fontWeight:"lighter"}}>Weekend 2 days *650.0/day</div>
            <div style={{ fontWeight: "lighter",fontSize:"12px" }}>{shop.price}</div>
          </div>
          <div className={styles.bow}>
            <div style={{ fontWeight: "lighter" ,marginRight:"160px",fontSize:"12px"}}>Peak Pricing</div>
            <div style={{ fontWeight: "lighter",fontSize:"12px",marginLeft:"110px" }}>0.0</div>
          </div>
          <hr style={{width:"100%", border:"1px solid gray",marginTop:"30px"}} />
        <hr style={{width:"100%", border:"1px solid gray",color:"gray"}} />

          <div className={styles.duration}>
          <div className={styles.bow}>
            <div style={{marginRight:"180px",fontSize:"18px",marginTop:"40px"}}>Total:</div>
            <div style={{fontSize:"18px",marginTop:"40px",marginLeft:"70px" }}>{shop.price}</div>
          </div>
          </div>
        </div>

        <Button component={Link} to="/confirm"  sx={{backgroundColor:"#FED250",color:"black",marginTop:"20px",width:"100%"}}> Confirm </Button>


            </div>

        </div>
      </div>
    </div>
  );
};
