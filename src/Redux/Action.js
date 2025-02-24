import { Navigate, useNavigate } from "react-router-dom";
import * as actions from "./Actiontype";

export const getUsers = (data) => {
  return {
    type: actions.GET_USERS,
    payload: data,
  };
};

export const setToken = (data) => {
  return {
    type: actions.LOGIN,
    payload: data,
  };
};

export const setCity = (data) => {
  return {
    type: actions.CITY,
    payload: data,
  };
};



export const getUsersAction = (phone, password) => {

  let payload = JSON.stringify({mobile:phone,password:password})

  return (dispatch) => {
    fetch("https://rbbackendclone.onrender.com/login", {
      method: "POST",
      body: payload,
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res)=>{
        
        if(res.status==="success") {
        
        dispatch(getUsers(res.userDetail))
        dispatch(setToken(res.token))
        localStorage.setItem("token", res.token);
        }
        else {
          
        }

      })

      .catch((res) => console.log(res));
  };
};

export const deleteUser = () => {
  return {
    type: actions.DELETE_USER,
    payload: [],
  };
};


export const datetime = (payload) => {
  return {
    type: actions.DATE_TIME,
    payload:payload
};
};

export const hourspay = (payload) => {
  return {
    type: actions.HOURS_PAY,
    payload:payload
};
};

export const timelineveh = (payload) => {
  return {
    type: actions.TIMELINE_VEH,
    payload:payload
};
};


export const deleteToken = (token) => {

  let payload = {token}

  return (dispatch) => {
    fetch("http://locahost:9008/Signout", {
      method: "PUT",
      body: payload,
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res)=>{

        dispatch(setToken(""))

      })

      .catch((res) => console.log(res));
  };
};


export const setVehicle = (payload) => {
  return {
    type: actions.VEHICLE_BOOK,
    payload:payload
};
};


export const rideamount = (payload) => {
  return {
    type: actions.RIDE_AMOUNT,
    payload:payload
};
};

export const loginCheck = (payload) => {
  return {
    type: actions.LOGIN_CHECK,
    payload:payload
};
};
