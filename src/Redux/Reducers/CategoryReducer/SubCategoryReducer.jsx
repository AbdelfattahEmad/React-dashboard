
import {GET_ERROR , GET_ALL_SUBCATEGORY} from "../../Types/Types"


 const inital = {
    Subcategory : [] , 
    loading : true , 

 }
 
    const SubCategoryReducer = ( state= inital , action) =>{
        
       switch(action.type){
        case GET_ALL_SUBCATEGORY:
            return {
                ...state,
                Subcategory : action.payload , 
                loading :false,
                error:action.error
        } 
        case  GET_ERROR : return {
            loading :true,
            Subcategory :action.payload
        }

        default :
        return state
    }
}

    export default SubCategoryReducer