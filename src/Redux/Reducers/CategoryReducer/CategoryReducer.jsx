
import { GET_ALL_CATEGORY  , GET_ERROR} from "../../Types/Types"


 const inital = {
    category : [] , 
    loading : true , 


 }
 
 const CategoryReducer = ( state= inital , action) =>{
    switch(action.type){
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category : action.payload , 
                loading :false,
                error:action.error
        } 
        case  GET_ERROR : return {
            loading :true,
            category :action.payload


        }

        default :
        return state
    }
}

export default CategoryReducer