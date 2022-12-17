
import axios from "../halpers/axios";
import { Teachers } from "../constants/constants";

export const getAllTeachers = () => {
    return async dispatch => {
        dispatch({ type: Teachers.GET_ALL_TEACHERS});
        try {
             const  res  = await axios.get(`/allTeacher`);
            dispatch({
                type: Teachers.GET_ALL_TEACHERS,
                payload: { teachers: res.data.AllTeachers
                }
            });

        } catch(error) {
            console.log(error);
        }

    }
}
