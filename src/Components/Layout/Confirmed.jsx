import React from 'react'
import { ProductDetails } from './ProductDetails'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const Confirmed = () => {






  return (
    <div style={{marginLeft:"auto",marginRight:"auto",padding:"160px"}}>

    
        <h1 style={{color:"black"}}>Booking Confirmed</h1>
        <CheckCircleIcon sx={{fontSize:"100px",color:"#FED250"}} />
      

        <Button component={Link} to={'/'} > Go to Home Page</Button>

    </div>
  )
}
