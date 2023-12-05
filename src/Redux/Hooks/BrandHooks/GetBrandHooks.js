
import { useDispatch, useSelector } from 'react-redux'
import  { useEffect} from 'react'
import { getBrandAction } from '../../Actions/BrandAction';



const GetBrandHook = () => {

const dispatch = useDispatch()

const GetBarnds = useSelector((state)=>state.BrandReducer.Brands)

const Loading = useSelector((state)=>state.BrandReducer.loading)


useEffect(()=>{

  dispatch(getBrandAction())

},[])



return{GetBarnds ,Loading}



}

export default GetBrandHook