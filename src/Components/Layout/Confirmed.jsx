import React from 'react'
import { ProductDetails } from './ProductDetails'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

export const Confirmed = () => {
  return (
    <div style={{marginLeft:"auto",marginRight:"auto",padding:"160px"}}>

    
        <h1 style={{color:"black"}}>Booking Confirmed</h1>
        <CheckCircleIcon sx={{fontSize:"100px",color:"#FED250"}} />
        <Link to="/"><h3 style={{color:"#FED250",textDecoration:"none",padding:"30px"}}>Go to Home Page</h3></Link>

    </div>
  )
}
