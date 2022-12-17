import { Teachers } from "../constants/constants";
const initState = {
    TEACHERS: [],
  
  };


  export default (state = initState, action) => {
    switch (action.type) {
      case Teachers.GET_ALL_TEACHERS:
        state = {
          ...state,
          TEACHERS: action.payload
          ,
          }
          break;
        };
  return state;



}



  