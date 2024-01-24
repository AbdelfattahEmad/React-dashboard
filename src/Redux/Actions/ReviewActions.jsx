import {ADD_REVIEW ,GET_ERROR ,GET_ALL_REVIEW , EDIT_REVIEW} from "../Types/Types"
import { useInserstDataWithAuth } from "../Hooks/DataHooks/DataHooks";
import { loggedInstance } from "../Api/basUrl";




export const AddReviewActions=()=> async(dispatch) => {
    try {
       const response = await useInserstDataWithAuth("reviews");

       dispatch({
            type : ADD_REVIEW,
            payload :response.data,
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

export const getReviewActions =()=> async(dispatch) => {
    try {
       const response = await loggedInstance.get("reviews");

       dispatch({
            type : GET_ALL_REVIEW,
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


export const EditReviewAction =()=> async(dispatch) => {

    try {
        const response = await loggedInstance.put("reviews")
       dispatch({
            type :EDIT_REVIEW,
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



export const DeleteReviewAction =(id)=>  async(dispatch) => {
    try {
       const response = await DeleteData(`reviews/${id}`);

       dispatch({
            type : DELETE_REVIEW,
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




