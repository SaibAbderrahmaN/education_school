import axios from "../halpers/axios";
import { PostConstants } from "../constants/constants";



export const getAllPosts = () => {
    return async dispatch => {

        dispatch({ type:  PostConstants.GET_ALL_POSTS });
        const res = await axios.get(`getPosts`);
        if(res.status === 200){
            const  posts  = res.data;
            dispatch({
                type:  PostConstants.GET_ALL_POSTS_SUCCESS,
                payload: { posts }
            });
        }else{
            dispatch({
                type:  PostConstants.GET_ALL_POSTS_FAILED,
                payload: { error: res.data.error }
            });
        }
    }
}
export const createPost = (form) => {
    return async (dispatch) => {
      try {
        dispatch({ type: PostConstants.CREATE_POSTS_REQUEST });
        const res = await axios.post(`createPost`, form);
        if (res.status === 201) {
          console.log('SuCCeSS')

          dispatch({ type: PostConstants.CREATE_POSTS_SUCCESS });
          dispatch(getAllPosts());
        } else {
          dispatch({ type: PostConstants.CREATE_POSTS_FAILED });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };