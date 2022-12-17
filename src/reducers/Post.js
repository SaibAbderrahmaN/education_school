import { PostConstants} from "../constants/constants";


const initState = {
    Posts: [],
  
  };


  export default (state = initState, action) => {
    switch (action.type) {
      case PostConstants.GET_ALL_POSTS_SUCCESS:
        console.log(action.payload)
        state = {
          ...state,
          Posts: action.payload  ,
          }
          break;
        };
  return state;



}