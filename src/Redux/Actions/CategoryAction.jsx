
import { GET_ALL_CATEGORY, GET_ERROR ,CREATE_CATEGORY,UPDATE_CATEGORY, DELETE_CATEGORY , GET_ONE_CATEGORY}from "../Types/Types"

import baseUrl from "../Api/basUrl"
import { insertDataWithImg , DeleteData,insertUpdateData} from "../Hooks/DataHooks/DataHooks";




export const getCategoryAction =()=>  async(dispatch) => {
    try {
       const response = await baseUrl.get("categories");

       dispatch({
            type : GET_ALL_CATEGORY ,
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


export const getoNECategoryAction =(id)=>  async(dispatch) => {
    try {
       const response = await baseUrl.get(`categories/${id}`);

       dispatch({
            type : GET_ONE_CATEGORY ,
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




export const CreateCategoryAction =(formData)=> async(dispatch) => {
    try {
       const response = await insertDataWithImg("categories" , formData);

       dispatch({
            type :CREATE_CATEGORY ,
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



export const DeleteCategoryAction =(id)=>  async(dispatch) => {
    try {
       const response = await DeleteData(`categories/${id}`);

       dispatch({
            type : DELETE_CATEGORY ,
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



export const EditCategoryAction =(Item)=> async(dispatch) => {
    try {
       const response = await insertUpdateData(`categories/${Item._id}`,{name:Item.name});

       dispatch({
            type : UPDATE_CATEGORY ,
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




