
import { GET_ALL_CATEGORY, GET_ERROR }  from "../Types/Types"
import baseUrl from "../Api/basUrl"


export const getCategoryAction =()=>  async(dispatch) => {
    try {
       const response = await baseUrl.get("categories");
       dispatch({
            type : GET_ALL_CATEGORY ,
            payload : response.data,
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

