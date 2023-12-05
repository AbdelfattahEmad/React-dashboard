
import { GET_ERROR , GET_ALL_BRANDS } from "../Types/Types"


const inital = {

    Brands : [] ,
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
