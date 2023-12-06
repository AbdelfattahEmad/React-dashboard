
import { GET_ERROR , GET_ALL_BRANDS ,ADD_BRANDS } from "../Types/Types"


const inital = {

    Brands : [] ,

    AddBrands:[],
    
    loading : true , 
    
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
        case ADD_BRANDS:
            return {
                ...state,
                AddBrands : action.payload , 
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
