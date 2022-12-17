import axios from "../halpers/axios";
import {GroupsConstants } from "../constants/constants";



export const getAllGroups = () => {
    return async dispatch => {

        dispatch({ type:  GroupsConstants.GET_ALL_GROUPS });
        const res = await axios.get(`groups`);
        console.log(res)
        if(res.status === 200){
            const  Groups  = res.data.groups;
            dispatch({
                type:  GroupsConstants.GET_ALL_GROUPS_SUCCESS,
                payload: {Groups}
            });
        }else{
            dispatch({
                type: GroupsConstants.GET_ALL_GROUPS_FAILED,
                payload: { error: res.data.error }
            });
        }
    }
}