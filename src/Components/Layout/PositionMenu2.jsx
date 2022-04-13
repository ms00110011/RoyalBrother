import React from "react";
import styles from "./PositionMenu2.module.css"
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch } from "react-redux";
import { deleteUser } from "../../Redux/Action";


export default function PositionMenu2({user}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const logout =  () => {
    localStorage.removeItem('user')
    dispatch(deleteUser)
    navigate('/login')
    window.location.reload(false)

  }


  return (
    <div>
      <div class={styles.dropdown}>
        <button class={styles.dropbtn} style={{display:"flex", justifyContent:"space-evenly"}}><Avatar alt="Remy Sharp" src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/user-profile-menu-70666577f1d7fbe6bba1f46ceacdb2e4abdbb2575014670cf9afbfbf35376c25.png" /><h6 style={{marginTop:"10px",marginLeft:"10px"}}>{`Hello ${user}`}</h6><  KeyboardArrowDownIcon sx={{marginTop:"10px"}} /></button>
        <div class={styles.dropdownContent}>
        <Link to="/profile">Profile</Link>
          <Button onClick={logout}>Logout</Button>
        </div>
      </div>
    </div>
  );
};
