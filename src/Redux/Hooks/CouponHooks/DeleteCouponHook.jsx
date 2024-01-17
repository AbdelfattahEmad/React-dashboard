
import { useDispatch } from 'react-redux'
import  { useRef, useState } from 'react'
import { DeleteCouponAction , getAllCouponsAction } from '../../Actions/CouponActions'


const DeleteCouponHooks = () => {


const deletedId= useRef(null)

const dispatch = useDispatch()


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);

const handleShow = () => setShow(true)    
  

const setId =(id)=>{
  deletedId.current=id
}


const handelDelete = ()=>{
   dispatch(DeleteCouponAction(deletedId.current))
   setShow(false)
   dispatch(getAllCouponsAction())
}

return{show,setShow ,handleClose ,handleShow ,setId ,handelDelete}
  

}

export default DeleteCouponHooks