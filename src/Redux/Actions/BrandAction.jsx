import { GET_ALL_BRANDS, GET_ERROR ,ADD_BRANDS ,DELETE_BRANDS ,EDIT_BRANDS , GET_ONE_BRAND }  from "../Types/Types"
import baseUrl from "../Api/basUrl"
import {DeleteData, insertDataWithImg, insertUpdateData} from "../Hooks/DataHooks/DataHooks";



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


export const getOneBrandAction =(id)=>  async(dispatch) => {
    try {
       const response = await baseUrl.get(`brands/${id}`);

       dispatch({
            type : GET_ONE_BRAND ,
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




export const DeleteBrandAction =(id)=> async(dispatch) => {
    try {

       const response = await DeleteData(`brands/${id}`);

       dispatch({
            type :DELETE_BRANDS ,
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


export const EditBrandAction =(Item)=>  async(dispatch) => {
    try {
       const response = await insertUpdateData(`brands/${Item._id}`,{name:Item.name});

       dispatch({
            type : EDIT_BRANDS ,
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



