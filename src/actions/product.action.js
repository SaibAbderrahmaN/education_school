import axios from "../halpers/axios";
import { productConstants } from "../constants/constants";

export const getProductsBySlug = (Slug) => {
    return async dispatch => {
        const res = await axios.get(`/products/${Slug}`);
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            });
        } else {
            
       
        }
    }
}
export const getAllProducts = () => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS});
        try {
             const  res  = await axios.get(`/product`);
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS,
                payload: { products: res.data.AllProducts }
            });

        } catch(error) {
            console.log(error);
        }

    }
}
export const getProductsBySearch = (searchQuery) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_BY_SEARCH});
        try {
             const  res  = await axios.get(`/product/search${searchQuery}`);
            dispatch({
                type: productConstants.GET_PRODUCT_BY_SEARCH,
                payload: { products: res.data.products}
            });

        } catch(error) {
            console.log(error);
        }

    }
}
export const getAllPages = () => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_ALL_PAGES});
        try {
             const  res  = await axios.get(`/page`);
            dispatch({
                type: productConstants.GET_ALL_PAGES,
                payload: { products: res.data }
            });

        } catch(error) {
            console.log(error);
        }

    }
}
export const getProductPage = (payload) => {
    return async dispatch => {
        try {
            const { cid, type } = payload.params;
            const res = await axios.get(`/page/${cid}/${type}`);
            dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST });
            if (res.status === 200) {
                const { page } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                    payload: { page }
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                    payload: { error }
                });
            }
        } catch(error) {
            console.log(error)
        }

    }
}

export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            res = await axios.get(`/product/${productId}`);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });

        } catch(error) {
            console.log(error);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            });
        }

    }
}
