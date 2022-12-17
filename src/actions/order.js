import axios from '../halpers/axios'
import {OrderConstants } from "../constants/constants";
import { Navigate } from 'react-router-dom';
export const CreateOrder = (form) => {
    return async dispatch =>{
        dispatch({type: OrderConstants.CREATE_ORDER})
        try {
            const res = await axios.post(`/order/createorder`, form);
            console.log(form)
            if (res.status === 201){
                dispatch({type: OrderConstants.CREATE_ORDER_SUCCESS,})
                Navigate('/')
            }
            
        } catch (error) {
            dispatch({type: OrderConstants.CREATE_ORDER_SUCCESS})
            console.log(error)
            
        }
    }

}






