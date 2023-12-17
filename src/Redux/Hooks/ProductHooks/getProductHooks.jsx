
import { useDispatch, useSelector } from 'react-redux'
import  { useEffect} from 'react'
import { getProductAction } from '../../Actions/ProductAction';



const GetProductHook = () => {

const dispatch = useDispatch()

const ProductData = useSelector((state)=>state.ProductReducer.Products)

const Loading = useSelector((state)=>state.ProductReducer.loading)




useEffect(()=>{

  dispatch(getProductAction())

},[])



return {ProductData,Loading}


}

export default GetProductHook