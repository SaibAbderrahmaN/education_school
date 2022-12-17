import { GroupsConstants} from "../constants/constants";


const initState = {
    Groups: [],
  
  };


  export default (state = initState, action) => {
    switch (action.type) {
      case GroupsConstants.GET_ALL_GROUPS_SUCCESS:
        console.log(action.payload)
        state = {
          ...state,
          Groups: action.payload  ,
          }
          break;
        };
  return state;



}