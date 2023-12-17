
import baseUrl from "../Api/basUrl";
import { DeleteData, insertDataWithImg } from "../Hooks/DataHooks/DataHooks";
import { GET_ALL_PRODUCTS , ADD_PRODUCTS ,GET_ERROR , DELETE_PRODUCT }  from "../Types/Types"


export const getProductAction =()=>async(dispatch) => {
    try {
       const response = await baseUrl.get("products");

       dispatch({
            type : GET_ALL_PRODUCTS ,
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

export const AddProductAction =(formData)=>async(dispatch) => {
    try {
       const response = await insertDataWithImg("products",formData);

       dispatch({
            type : ADD_PRODUCTS ,
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

export const DeleteProductAction =(id)=>  async(dispatch) => {
    try {
       const response = await DeleteData(`products/${id}`);

       dispatch({
            type : DELETE_PRODUCT ,
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




