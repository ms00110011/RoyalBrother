import {
  CITY,
  DATE_TIME,
  DELETE_USER,
  GET_USERS,
  HOURS_PAY,
  LOGIN,
  LOGOUT,
  TIMELINE_VEH,
  VEHICLE_BOOK,
  RIDE_AMOUNT,
  LOGIN_CHECK
} from "./Actiontype";

export const Reducer = (
  state = {
    loginNow: false,
    isLogin: false,
    user: {},
    durationData: {pickupDate:"",pickupTime: "",dropDate: "",dropTime: "",},
    payTotal: "",
    timeline: "",
    token: "", 
    city:"Pune",
    vehicle: {name:"",img:"",perhr:""},
    rideamount:""
  },
  action
) => {
  switch (action.type) {
    case GET_USERS: {
      return { ...state, user: action.payload, isLogin: true };
    }

    case DELETE_USER: {
      return { ...state, user: action.payload, isLogin: false };
    }

    case DATE_TIME: {
      return { ...state, durationData: action.payload };
    }

    case HOURS_PAY: {
      console.log(action.payload)
      return { ...state, payTotal: action.payload };
    }

    case TIMELINE_VEH: {
      return { ...state, timeline: action.payload };
    }

    case LOGOUT: {
      return {...state,token:action.payload }
    }

    case LOGIN: {
      return {...state,token:action.payload }
    }

    case CITY: {
      return {...state,city:action.payload }
    }

    case VEHICLE_BOOK : {
      return {...state,vehicle:action.payload}
    }

    case RIDE_AMOUNT : {
      return {...state, rideamount:action.payload }

    }

    case LOGIN_CHECK : {
      return {loginNow:true}
    }

    default: {
      return state;
    }
  }
};
