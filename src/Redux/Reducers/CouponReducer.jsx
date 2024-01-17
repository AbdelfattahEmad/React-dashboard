import {GET_ALL_COUPONS , GET_ERROR ,ADD_COUPONS ,DELETE_COUPON ,EDIT_COUPON , GET_ONE_COUPON  } from "../Types/Types"



const inital = {
    
    AddCoupons:[],
    Coupons:[],
    DeleteCoupon:[],
    getOneCoupon:[],
    EditCoupon:[],
    loading :[]

}

    const CouponReducer = ( state= inital , action) =>{
    switch(action.type){
        case ADD_COUPONS:
            return {
                ...state,
                AddCoupons:action.payload , 
                loading :false,
                error:action.error
        } 
        case GET_ALL_COUPONS:
            return {
                ...state,
                Coupons:action.payload , 
                loading :false,
                error:action.error
        } 
            case DELETE_COUPON :
                return {
                    ...state,
                    DeleteCoupon:action.payload , 
                    loading :false,
                    error:action.error
                        }
            case GET_ONE_COUPON   :
                return {
                ...state,
                 getOneCoupon:action.payload , 
                loading :false,
                error:action.error
                        }
            case EDIT_COUPON :
                return {
                ...state,
                EditCoupon:action.payload , 
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

export default CouponReducer
