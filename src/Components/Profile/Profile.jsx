import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

export const Profile = () => {


  const name = useSelector((state)=>state?.user[0]?.name) || '';
  const phone = useSelector((state)=>state?.user[0]?.phone) || '';
  const email = useSelector((state)=>state?.user[0]?.email) || '';




  return (
    <div>


    <div style={{marginLeft:"auto",marginRight:"auto",width:"50%",height:"400px"}}>
    <Avatar sx={{margin:"20px"}} alt="Remy Sharp" src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/user-profile-menu-70666577f1d7fbe6bba1f46ceacdb2e4abdbb2575014670cf9afbfbf35376c25.png" />
    
        <div>Name:{name}</div>
        <div>Phone:{phone}</div>
        <div>E-mail:{email}</div>
        <div>Credits:0</div>

    </div>
    </div>


    
  )
}
