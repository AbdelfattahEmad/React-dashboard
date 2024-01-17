import { CREATE_NEW_USER , SIGN_IN ,GET_ERROR } from "../Types/Types";
import { useInserstData} from "../Hooks/DataHooks/DataHooks";
import toast, { Toaster } from 'react-hot-toast';





    export const SignUpAction =(data)=> async(dispatch) => {
        try {
           const response = await useInserstData(`auth/signup`,data);
           
           dispatch({
                type :CREATE_NEW_USER ,
                payload :response.data,
                loading : true,
            })
        } catch(err) {
            dispatch({
                type :CREATE_NEW_USER ,
                payload :err.response,
            })
        }
    }


    
    
    export const SignInAction =(data)=> async(dispatch) => {
        try {
           const response = await useInserstData(`auth/login`,data)
           if(response.data.data.role === "admin"){
            localStorage.setItem("user",JSON.stringify(response.data))
            dispatch({
                type: SIGN_IN,
                payload : response.data,
                loading : true,
            })
            toast.success('logged successfully ');

           }else{

            toast.error('you are not authorized to login !');


           }

        } catch(err) {
            toast.error(err.response.data.message);
            dispatch({
                type :GET_ERROR,
                error :err.response.data,

            })
        }
    }


    
    export const loadSignUserAction =(data)=> async(dispatch) => {

          const user = JSON.parse(localStorage.getItem("user"))

          if(user){
            dispatch({
                type: SIGN_IN,
                payload :user,
                loading : true,
            })
          }
           
        }
    


    

