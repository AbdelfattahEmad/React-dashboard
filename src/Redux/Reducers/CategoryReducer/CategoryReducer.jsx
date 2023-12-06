
import { GET_ALL_CATEGORY,GET_ERROR ,CREATE_CATEGORY , DELETE_CATEGORY ,UPDATE_CATEGORY ,GET_ONE_CATEGORY   } from "../../Types/Types"


 const inital = {

    category : [] ,
    createCategory :[],
    deleteCategory :[], 
    selectedCategory:null,
    EditCategory : [],
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
        case CREATE_CATEGORY:
        return {
             createCategory: action.payload , 
             loading :false,
            error:action.error
    } 

    case GET_ONE_CATEGORY  :
        return {
            ...state,
            selectedCategory : action.payload , 
             loading :false,
            error:action.error
    } 

    case DELETE_CATEGORY :
        return {
            ...state,
            deleteCategory : action.payload , 
             loading :false,
            error:action.error
    } 

    case UPDATE_CATEGORY  :
        return {
            ...state,
            EditCategory : action.payload , 
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