
import { CREATE_NEW_USER,SIGN_IN , GET_ERROR } from "../Types/Types"


const inital = {
    createUser : [] ,
    signIn:null,
    loading :true , 
    error :false
    
 }

const AuthReducer=(state= inital,action) =>{
  
    switch(action.type){

        case CREATE_NEW_USER:
            return{
                ...state,
                createUser:action.payload , 
                loading :false,
        } 
        case SIGN_IN:
            return {
                ...state,
                signIn:action.payload , 
                loading :false,
                
        } 
        case GET_ERROR:
            return {
                ...state,
                loading :false,
                error:action.error
        } 


        default :
        return state

    }
}

export default AuthReducer
