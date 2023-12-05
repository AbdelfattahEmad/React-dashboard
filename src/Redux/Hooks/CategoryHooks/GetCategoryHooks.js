
import { useDispatch, useSelector } from 'react-redux'
import  { useEffect, useRef, useState } from 'react'
import { getCategoryAction } from '../../Actions/CategoryAction';



const GetCategoryHook = () => {

const dispatch = useDispatch()

const CategoryData = useSelector((state)=>state.CategoryReducer.category)

const Loading = useSelector((state)=>state.CategoryReducer.loading)


useEffect(()=>{

  dispatch(getCategoryAction())

},[])



return{CategoryData ,Loading}



}

export default GetCategoryHook