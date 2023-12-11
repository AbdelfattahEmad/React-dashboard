import { useDispatch, useSelector } from 'react-redux'
import  { useEffect} from 'react'
import { getSubCategoryAction } from '../../Actions/SubCategoryAction';


const GetSubcategoryHooks = () => {

    const dispatch = useDispatch()

const GetSubCategory = useSelector((state)=>state.SubCategoryReducer.Subcategory)


const Loading = useSelector((state)=>state.SubCategoryReducer.loading)


useEffect(()=>{

  dispatch(getSubCategoryAction())

},[])





return{GetSubCategory , Loading }

}

export default GetSubcategoryHooks