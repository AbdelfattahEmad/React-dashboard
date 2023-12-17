
import { useDispatch } from 'react-redux'
import  { useRef, useState } from 'react'
import { DeleteProductAction, getProductAction } from '../../Actions/ProductAction';


const DeleteProductHooks = () => {


const deletedId= useRef(null)

const dispatch = useDispatch()


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);

const handleShow = () => setShow(true)    
  

const setId =(id)=>{
  deletedId.current=id
}


const handelDelete = ()=>{
   dispatch(DeleteProductAction(deletedId.current))
   setShow(false)
   dispatch(getProductAction())
}

return{show,setShow ,handleClose ,handleShow ,setId ,handelDelete}
  

}

export default DeleteProductHooks