
import { getCategoryAction , DeleteCategoryAction} from '../../Actions/CategoryAction';
import { useDispatch } from 'react-redux'
import  { useEffect, useRef, useState } from 'react'


const DeleteCategoryHooks = () => {


const deletedId= useRef(null)

const dispatch = useDispatch()


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

return{show,setShow ,handleClose ,handleShow ,setId ,handelDelete}
  

}

export default DeleteCategoryHooks