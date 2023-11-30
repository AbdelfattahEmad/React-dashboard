
import { useDispatch, useSelector } from 'react-redux'
import  { useEffect, useRef, useState } from 'react'
import { getCategoryAction , DeleteCategoryAction} from '../../Redux/Actions/CategoryAction';



const CategoryHook = () => {

const dispatch = useDispatch()

//Get Category
const CategoryData = useSelector((state)=>state.CategoryReducer.category)
const Loading = useSelector((state)=>state.CategoryReducer.loading)
const EditCategory =useSelector((state)=>state.CategoryReducer.EditCategory)

useEffect(()=>{

  dispatch(getCategoryAction())

},[])





//Delete Category 
const deletedId= useRef(null)


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);

const handleShow = () => setShow(true)    
  

const setId =(id)=>{
  deletedId.current=id
}


const handelDelete = ()=>{

   dispatch(DeleteCategoryAction(deletedId.current))
   setShow(false)
   dispatch(getCategoryAction())
}


// Edit Category 







return{CategoryData ,Loading ,show,setShow ,handleClose ,
  handleShow ,setId ,handelDelete,deletedId}



}

export default CategoryHook