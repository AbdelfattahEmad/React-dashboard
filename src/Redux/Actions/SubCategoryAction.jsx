import { GET_ALL_SUBCATEGORY, GET_ERROR , CREATE_SUBCATEGORY  ,DELETE_SUBCATEGORY , GET_ONE_SUBCATEGORY ,UPDATE_SUBCATEGORY}  from "../Types/Types"
import baseUrl from "../Api/basUrl"
import { insertData , DeleteData , insertUpdateData } from "../Hooks/DataHooks/DataHooks";


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



export const deleteSubCategoryAction =(id)=> async(dispatch) => {
    try {
       const response = await DeleteData(`subcategories/${id}`);
       dispatch({
            type : DELETE_SUBCATEGORY,
            payload :response.data,
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

export const getOneSubCategoryAction =(id)=> async(dispatch) => {
    try {
       const response = await baseUrl.get(`subcategories/${id}`);
       dispatch({
            type : GET_ONE_SUBCATEGORY,
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



export const EditSubCategoryAction =(Item)=>  async(dispatch) => {
    try {
       const response = await insertUpdateData(`subcategories/${Item.category}`,{name:Item.name});

       dispatch({
            type : UPDATE_SUBCATEGORY ,
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









