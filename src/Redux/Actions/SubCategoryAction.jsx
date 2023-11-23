import { GET_ALL_SUBCATEGORY, GET_ERROR }  from "../Types/Types"
import baseUrl from "../Api/basUrl"


export const getSubCategoryAction =()=> async(dispatch) => {

    try {

       const response = await baseUrl.get("subcategories");

       console.log(response)

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

