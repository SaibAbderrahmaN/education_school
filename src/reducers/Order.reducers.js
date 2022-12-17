import { OrderConstants } from "../constants/constants";


const initState = {
    Createorder: ' ',
    
  
  };


  export default (state = initState, action) => {
    switch (action.type) {
      case OrderConstants.CREATE_ORDER_SUCCESS:
        state = {
          ...state,
          Createorder: 'تم ارسال طلبك بنجاح' ,
          }
          break;
        };
  return state; 
 }