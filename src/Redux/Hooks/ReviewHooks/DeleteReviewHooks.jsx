
import { useDispatch } from 'react-redux'
import  { useRef, useState } from 'react'
import { DeleteReviewAction, getReviewActions } from '../../Actions/ReviewActions';


const DeleteReviewHooks = () => {


const deletedId= useRef(null)

const dispatch = useDispatch()


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);

const handleShow = () => setShow(true)    
  

const setId=(id)=>{
  deletedId.current=id
}


const handelDelete = ()=>{
   dispatch(DeleteReviewAction(deletedId.current))
   setShow(false)
   dispatch(getReviewActions())
}

return{show,setShow ,handleClose ,handleShow ,setId ,handelDelete}


}

export default DeleteReviewHooks