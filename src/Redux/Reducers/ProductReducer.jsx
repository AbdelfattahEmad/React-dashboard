import {GET_ALL_PRODUCTS , ADD_PRODUCTS ,GET_ERROR ,DELETE_PRODUCT, EDIT_PRODUCT,GET_ONE_PRODUCT} from "../Types/Types"


const inital = {
    
    Products:[],
    AddProducts:[],
    DeleteProduct:[],
    getOneProduct:[],
    EditProduct:[],
    loading:[]
 }

const ProductReducer = (state= inital,action) =>{
  
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                Products:action.payload , 
                loading :false,
                error:action.error
                     }
        case ADD_PRODUCTS:
            return {
                ...state,
                AddProducts:action.payload , 
                loading :false,
                error:action.error
            }
            case DELETE_PRODUCT:
                return {
                    ...state,
                    DeleteProduct:action.payload , 
                    loading :false,
                    error:action.error
                        }
            case GET_ONE_PRODUCT  :
                return {
                ...state,
                 getOneProduct:action.payload , 
                loading :false,
                error:action.error
                        }
            case EDIT_PRODUCT :
                return {
                ...state,
                EditProduct:action.payload , 
                loading :false,
                error:action.error
                        }
              case  GET_ERROR :
                return {
                loading :true,
                Products:action.payload
                     }
        
            default :
            return state
             
        }

     }
    export default ProductReducer
