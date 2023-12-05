import { GET_ALL_BRANDS, GET_ERROR }  from "../Types/Types"
import baseUrl from "../Api/basUrl"



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
