import {GET_ALL_COUPONS , GET_ERROR ,ADD_COUPONS ,DELETE_COUPON ,EDIT_COUPON , GET_ONE_COUPON  } from "../Types/Types"
import baseUrl, { loggedInstance } from "../Api/basUrl"
import {  useInserstDataWithAuth} from "../Hooks/DataHooks/DataHooks";




export const CreateCouponAction =(body)=> async(dispatch) => {
    try {
       const response = await useInserstDataWithAuth(`coupons`,body);

       dispatch({
            type :ADD_COUPONS ,
            payload : response,
        })
    } catch(err) {
        dispatch({
            type : ADD_COUPONS,
            payload : err.response,
        })
    }
}




export const getAllCouponsAction =()=>  async(dispatch) => {
    try {
       const response = await loggedInstance.get("coupons");

       dispatch({
            type : GET_ALL_COUPONS ,
            payload : response.data.data,
            loading : true,
            error: false
        })
    } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}



export const DeleteCouponAction =(id)=>  async(dispatch) => {
    try {
       const response = await DeleteData(`coupons/${id}`);

       dispatch({
            type : DELETE_COUPON ,
            payload : response.data,
            loading : true,
            error: false
        })
    } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}

export const getOneCouponAction =(id)=>  async(dispatch) => {
    try {
       const response = await baseUrl.get(`coupons/${id}`);

       dispatch({
            type : GET_ONE_COUPON ,
            payload : response.data,
            loading : true,
            error: false
        })
    } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}




export const EditCouponAction =(Item)=> async(dispatch) => {

    try {
       const response = await insertUpdateData(`coupons/${Item._id}`);


       dispatch({
            type :EDIT_COUPON ,
            payload : response.data.data,
            error: false
        })
    } catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}


