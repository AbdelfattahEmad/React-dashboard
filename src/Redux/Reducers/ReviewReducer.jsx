import {ADD_REVIEW ,GET_ERROR , GET_ALL_REVIEW ,DELETE_REVIEW ,EDIT_REVIEW , GET_ONE_REVIEW } from "../Types/Types"



const inital = {
    
    AddReview:[],
    getAllReview:[],
    EditReview:[],
    DeleteReview:[],
    loading :[]

}

    const ReviewReducer = ( state= inital , action) =>{
    switch(action.type){
        
        case ADD_REVIEW :
            return {
                ...state,
                AddReview:action.payload , 
                loading :false,
        } 
        case GET_ALL_REVIEW:
            return {
                ...state,
                getAllReview:action.payload , 
                loading :false,
                error:action.error
        } 
            case DELETE_REVIEW  :
                return {
                    ...state,
                    DeleteReview:action.payload, 
                    loading :false,
                    error:action.error
                        }
            case GET_ONE_REVIEW    :
                return {
                ...state,
                 getOneCoupon:action.payload , 
                loading :false,
                error:action.error
                        }
            case EDIT_REVIEW  :
                return {
                ...state,
                EditReview:action.payload , 
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

export default ReviewReducer
