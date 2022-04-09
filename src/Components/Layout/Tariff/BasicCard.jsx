import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({name,img,booktime,kmlimit,exkm}) {




  return (
    <Card sx={{ width:"80%", margin:"10px", backgroundColor:"whitesmoke", height:"650px",padding:"0" }}>
      <CardContent>
        <h6 sx={{ fontSize: 14,textAlign:"center" }} color="text.secondary" gutterBottom>
          {name}
        </h6>
        <img src={img} alt="" />
       <div style={{width:"100%",height:"30px",border:"1px solid gray",marginTop:"10px", borderBottom:"3px solid #FED250" }}>Hourly</div>
       <div>
         <h6 style={{fontSize:"12px",textAlign:"left",marginTop:"25px"}}>Mon-Thu</h6>
         <div>
           <p style={{color:"black",fontSize:"9px",textAlign:"left"}}>(Min 24 hrs booking)</p>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <p style={{color:"black", fontSize:"11px"}}>Booking Time (0- 24 hrs)</p>
           <h6 style={{fontSize:"11px"}}><CurrencyRupeeIcon sx={{fontSize:"small"}} />{booktime}/hr</h6>
           </div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <p style={{color:"black", fontSize:"11px"}}>Booking Time ( After 24 hrs)</p>
           <h6 style={{fontSize:"11px"}}><CurrencyRupeeIcon sx={{fontSize:"small"}} />{booktime}/hr</h6>
           </div>
         </div>
       </div>      



       <div>
         <h6 style={{fontSize:"12px",textAlign:"left",marginTop:"25px"}}>Fri-Sun</h6>
         <div>
           <p style={{color:"black",fontSize:"9px",textAlign:"left"}}>(Min 24 hrs booking)</p>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <p style={{color:"black", fontSize:"11px"}}>Booking Time ( After 24 hrs)</p>
           <h6 style={{fontSize:"11px"}}><CurrencyRupeeIcon sx={{fontSize:"small"}} />{booktime}/hr</h6>
           </div>
         </div>
       </div>      



       <div>
         <h6 style={{fontSize:"12px",textAlign:"left",marginTop:"25px"}}>Extras</h6>
         <div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <p style={{color:"black", fontSize:"11px"}}>km Limit</p>
           <h6 style={{fontSize:"11px"}}><CurrencyRupeeIcon sx={{fontSize:"small"}} />{kmlimit}/hr</h6>
           </div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <p style={{color:"black", fontSize:"11px"}}>Excess Km charge</p>
           <h6 style={{fontSize:"11px"}}><CurrencyRupeeIcon sx={{fontSize:"small"}} />{exkm}/hr</h6>
           </div>
         </div>
       </div>      
       <Button sx={{backgroundColor:"#FED250", width:"100%", color:"black"}} component={Link} to="/searchR" variant="contained">
 Book Now
</Button>
      </CardContent>
    </Card>
  );
}
