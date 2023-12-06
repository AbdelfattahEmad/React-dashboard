import { GET_ALL_BRANDS, GET_ERROR ,ADD_BRANDS ,DELETE_BRANDS}  from "../Types/Types"
import baseUrl from "../Api/basUrl"
import {DeleteData, insertDataWithImg} from "../Hooks/DataHooks/DataHooks";



export const getBrandAction =()=> async(dispatch) => {
    try {

       const response = await baseUrl.get("brands");

       dispatch({
            type : GET_ALL_BRANDS ,
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




export const AddBrandAction =(formData)=> async(dispatch) => {
    try {

       const response = await insertDataWithImg("brands", formData);

       dispatch({
            type :ADD_BRANDS ,
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


export const DeleteBrandAction =(formData)=> async(dispatch) => {
    try {

       const response = await DeleteData("brands", formData);

       dispatch({
            type :DELETE_BRANDS ,
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


