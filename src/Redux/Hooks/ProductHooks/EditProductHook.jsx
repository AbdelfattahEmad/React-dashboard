import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import { EditProductAction, getoNEProductAction } from '../../Actions/ProductAction'





const EditProductHooks = () => {

    const {id} = useParams()

    const dispatch = useDispatch()

    const [name,setName]=useState("")
    const [price,setPrice]=useState()
    const [ quantity,setQuantity]=useState()
    const [ispress,SetIspress]=useState(false)
    const [loading , setLoading] =useState(true)

    useEffect(()=>{
       const run =async()=>{
           await dispatch(getoNEProductAction(id))
        }
        run()
    },[])




    const Item = useSelector((state)=>state.ProductReducer.EditProduct)


    useEffect(()=>{
        if(Item){
            setName(Item.name);
            setPrice(Item.price)
            setQuantity(Item.quantaty)
        }
    },[Item])


    

    const onChangeName=(event)=>{
        event.persist();
        setName(event.target.value)
    }

    const onChangePrice=(event)=>{
        event.persist();
        setPrice(event.target.value)
    }

    const onChangeQuantity=(event)=>{
        event.persist();
        setQuantity(event.target.value)
    }



    const handelEditSubmit=(event)=>{
        event.preventDefault() 
        setLoading(true)
        dispatch(EditProductAction({_id:Item._id,name:name,price:price,quantity:quantity}))
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

export default EditProductHooks