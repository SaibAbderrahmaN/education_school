import axios from "../halpers/axios";
import { categoryConstansts } from "../constants/constants";

export const getAllCategory = () => {
    return async dispatch => {

        dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST });
        const res = await axios.get(`category/getcategory`);
        if(res.status === 200){
            const { categoryList } = res.data;
            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categoryList }
            });
        }else{
            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            });
        }


    }
}
export const getCategoryById = (id) => {
   
        return async dispatch => {
            const res = await axios.get(`/category/${id}`);
            if (res.status === 200) {
                dispatch({
                    type: 'GET_CATEGORY_BY_ID',
                    payload: res.data
                });
            } else {
                // dispatch({
                //     type: 
                // })
            }
        }


    }
