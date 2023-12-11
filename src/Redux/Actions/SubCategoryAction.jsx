import { GET_ALL_SUBCATEGORY, GET_ERROR , CREATE_SUBCATEGORY }  from "../Types/Types"
import baseUrl from "../Api/basUrl"
import { insertData } from "../Hooks/DataHooks/DataHooks";


export const getSubCategoryAction =()=> async(dispatch) => {

    try {

       const response = await baseUrl.get("subcategories");


       dispatch({
            type : GET_ALL_SUBCATEGORY,
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


export const AddSubCategoryAction =(formData)=> async(dispatch) => {
    try {
       const response = await insertData("subcategories",formData);
       dispatch({
            type : CREATE_SUBCATEGORY,
            payload :response.data.data,
            error: false
        })
        }catch(err) {
        dispatch({
            type : GET_ERROR ,
            payload : err,
            error : true,
        })
    }
}



