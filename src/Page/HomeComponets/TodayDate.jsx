import React from "react";
import { useDispatch } from "react-redux";
import { datetime } from "../../Redux/Action";

// Rearrange date value to get the order you want... also replace / with a cooler separator like ⋅
export default function TodayDate() {

  let dispatch = useDispatch()


  const current = new Date();

  console.log(current.getDate())

  if(current.getMonth()<10) {
   var month = "0"+ (current.getMonth()+1).toString()
   
  }

  if(current.getDate()<10) {
    var date = "0"+ current.getDate().toString()
   }


  const re = `${current.getFullYear()}-${month}-${date}`;

   dispatch(datetime(re))

  return re
}

