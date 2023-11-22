
import { useDispatch, useSelector } from 'react-redux'
import  { useEffect } from 'react'

import { getCategoryAction } from '../../Redux/Actions/CategoryAction';


const CategoryHook = () => {

const dispatch = useDispatch()

useEffect(()=>{

  dispatch(getCategoryAction())

},[])

const CategoryData = useSelector((state)=>state.CategoryReducer.category)


const Loading = useSelector((state)=>state.CategoryReducer.loading)
console.log(CategoryData)


return{CategoryData ,Loading}



}

export default CategoryHook