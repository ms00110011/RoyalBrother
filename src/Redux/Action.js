import { Navigate, useNavigate } from "react-router-dom";
import * as actions from "./Actiontype";

export const getUsers = (data) => {




  return {
    type: actions.GET_USERS,
    payload: data,
  };
};

export const getUsersAction = (phone, password) => {



  return (dispatch) => {
    fetch(`https://rbjson.herokuapp.com/user?phone=${phone}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res[0].pass == password);
        if (res[0].pass == password) {
          dispatch(getUsers(res));
          localStorage.setItem("user", JSON.stringify(res));
          console.log(res)
        } else {
          // alert("password is wrong");
          throw new Error("password is wrong") 
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
