
import { GET_ERROR , GET_ALL_BRANDS ,ADD_BRANDS , DELETE_BRANDS , EDIT_BRANDS ,GET_ONE_BRAND } from "../Types/Types"


const inital = {

    Brands : [] ,

    AddBrands:[],
    GetOneBrands:[],
    DeleteBrands :[],
    EditBrands :[],
    loading :true , 
    
 }

const BrandReducer = ( state= inital , action) =>{
  
    switch(action.type){
        
        case GET_ALL_BRANDS:
            return {
                ...state,
                Brands : action.payload , 
                loading :false,
                error:action.error
        } 
        case GET_ONE_BRAND :
            return {
                ...state,
                GetOneBrands : action.payload , 
                loading :false,
                error:action.error
        } 

        case ADD_BRANDS:
            return {
                ...state,
                AddBrands : action.payload , 
                loading :false,
                error:action.error
        }  
        case EDIT_BRANDS:
            return {
                ...state,
                EditBrands: action.payload , 
                loading :false,
                error:action.error
        }   

        
        case DELETE_BRANDS:
            return {
                ...state,
                DeleteBrands: action.payload , 
                loading :false,
                error:action.error
        }   

  
        case  GET_ERROR :

             return {
            loading :true,
            Brands :action.payload
        }

        default :
        return state

    }
}

export default BrandReducer
