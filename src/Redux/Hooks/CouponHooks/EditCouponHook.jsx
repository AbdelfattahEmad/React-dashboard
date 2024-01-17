import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import { EditCouponAction, getOneCouponAction } from '../../Actions/CouponActions'





const EditCouponHooks = () => {

    const {id} = useParams()

    const dispatch = useDispatch()

    const [name,setName]=useState("")
    const [expire,setExpire]=useState()
    const [ discount,setDiscount]=useState()
    const [ispress,SetIspress]=useState(false)
    const [loading , setLoading] =useState(true)

    useEffect(()=>{
       const run =async()=>{
           await dispatch(getOneCouponAction(id))
        }
        run()
    },[])




    const Item = useSelector((state)=>state.CouponReducer.EditCoupon)


    useEffect(()=>{
        if(Item){
            setName(Item.name);
            setExpire(Item.expire)
            setDiscount(Item.discout)
        }
    },[Item])


    

    const onChangeName=(event)=>{
        event.persist();
        setName(event.target.value)
    }

    const onChangePrice=(event)=>{
        event.persist();
        setExpire(event.target.value)
    }

    const onChangeQuantity=(event)=>{
        event.persist();
        setDiscount(event.target.value)
    }



    const handelEditSubmit=(event)=>{
        event.preventDefault() 
        setLoading(true)
        dispatch(EditCouponAction({_id:Item._id}))
        setName("")
        setPrice("")
        setQuantity("")
        setLoading(false)
       }


       useEffect(()=>{

        if(loading === false){
          setName("")
          setTimeout(()=>{
            SetIspress(false)
          },2000)
      
      
          if(Item === 201) {
            notify("Mission sucssufuly","success");
          }else if(Item === 404){
          notify(" Erorr","error");
      
      
          }
      
        }
      
      
      },[loading])
      

    return {loading ,name,price,quantity,onChangeName, onChangePrice,onChangeQuantity ,handelEditSubmit ,ispress}

}

export default EditCouponHooks