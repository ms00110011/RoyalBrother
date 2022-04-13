import { DELETE_USER, GET_USERS } from "./Actiontype";

export const Reducer = (state = { isLogin: false, user: {} }, action) => {
  switch (action.type) {
    case GET_USERS: {
      return { ...state, user: action.payload, isLogin:true };
    }

    case DELETE_USER: {
      return {...state,user:action.payload,isLogin:false}
    }

    default: {
      return state;
    }
  }
};

// const initialState = {
//     product: [],
//     isLooding: true,

//   }

//   const appReducer = (state= initialState,{type,payload})=> {
//     switch(type){
//         case "GET_PRODUCT_REQUEST": {
//             return {
//               ...state,
//               isLooding: true
//             };
//           }
//         case "GET_PRODUCT" : {
//             return {
//                 ...state,
//                 product : payload.product,
//                 isLooding: false
//             }
//         }
//         case "ADD_TO_CART": {
//             return {
//                 ...state,
//                 product : [...state.product, payload.product]
//             }
