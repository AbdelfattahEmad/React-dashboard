import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import empty from "../../../assets/Images/empty.png"
import { EditBrandAction, getOneBrandAction } from '../../Actions/BrandAction'





const EditBrandHooks = () => {

    const {id} = useParams()

    const dispatch = useDispatch()

    const [img,setImg]=useState(empty)

    const [name,setName]=useState("")
    const [ispress,SetIspress]=useState(false)
    const [loading , setLoading] =useState(true)


    useEffect(()=>{

        const run =async()=>{

           await dispatch(getOneBrandAction(id))

        }
        run()
    },[])




    const Item = useSelector((state)=>state.BrandReducer.GetOneBrands)

    

    useEffect(()=>{
        if(Item){

            setImg(Item.image);
            setName(Item.name);
        }
    },[Item])



    const onImageChange = (e) =>{
        if(e.target.files && e.target.files[0]){
          setImg(URL.createObjectURL(e.target.files[0]))
          SetselectedFile(e.target.files[0])
        }
      }
    

    const onChangeName =(event)=>{
        event.persist();
        setName(event.target.value)
    }

    const handelEditSubmit =(event)=>{
        event.preventDefault() 
        setLoading(true)
        dispatch(EditBrandAction({_id:Item._id ,name :name}))
        setImg(empty)
        setName("")
        setLoading(false)
       }


       useEffect(()=>{

        if(loading === false){
          setImg(empty)
          setName("")
          setTimeout(()=>{
            SetIspress(false)
          },2000)
      
      
          if(Item === 201) {
            notify("Mission sucssufuly","success");
      
          }else if(Item=== 404){
      
          notify(" Erorr","error");
      
      
          }
      
        }
      
      
      },[loading])
      

    return {name,img,onChangeName, onImageChange,handelEditSubmit ,ispress}

}

export default EditBrandHooks