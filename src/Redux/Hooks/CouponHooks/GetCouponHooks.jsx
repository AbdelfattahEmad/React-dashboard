import { useDispatch, useSelector } from 'react-redux'
import  { useEffect} from 'react'
import { getAllCouponsAction } from '../../Actions/CouponActions';



const GetCouponHook = () => {

const dispatch = useDispatch()

const CouponList = useSelector((state)=>state.CouponReducer.Coupons)

const Loading = useSelector((state)=>state.CouponReducer.loading)


useEffect(()=>{

  dispatch(getAllCouponsAction())

},[])



return{CouponList,Loading}



}

export default GetCouponHook 