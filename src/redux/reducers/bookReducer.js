import { ActionTypes } from "../constants/action-types";
const initialState = {
    products: [],
 };
 export const fetchbook = (state = initialState, action) => {
     switch (action.type) {
       case ActionTypes.FETCHBOOK:
         return {
           ...state,
           loading: true,
         };
       default:
         return state;
     }
   };

 export const fetchonebook = (state = initialState, action) => {
     switch (action.type) {
       case ActionTypes.FETCHONEBOOK:
         return {
           ...state,
           loading: true,
         };
       default:
         return state;
     }
   };