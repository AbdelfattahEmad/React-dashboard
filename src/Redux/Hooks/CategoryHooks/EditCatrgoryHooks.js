import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditCategoryAction, getoNECategoryAction } from '../../Actions/CategoryAction'
import {useParams} from "react-router-dom"
import empty from "../../../assets/Images/empty.png"




const EditCatrgoryHooks = () => {

    const {id} = useParams()


    const dispatch = useDispatch()

    const [img,setImg]=useState(empty)

    const [name,setName]=useState("")
    const [ispress,SetIspress]=useState(false)
    const [loading , setLoading] =useState(true)





  


    useEffect(()=>{

        const run =async()=>{

           await dispatch(getoNECategoryAction(id))

        }
        run()
    },[])




    const Item = useSelector((state)=>state.CategoryReducer.selectedCategory)

    

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
        dispatch(EditCategoryAction({_id:Item._id ,name :name}))
        setImg()
       }


       useEffect(()=>{

        if(loading === false){
          setImg(empty)
          setName("")
          setTimeout(()=>{
            SetIspress(false)
          },2000)
      
      
          if(res === 201) {
            notify("Mission sucssufuly","success");
      
          }else if( res === 404){
      
          notify(" Erorr","error");
      
      
          }
      
        }
      
      
      },[loading])
      

    return {name,img,onChangeName, onImageChange,handelEditSubmit ,ispress}

}

export default EditCatrgoryHooks