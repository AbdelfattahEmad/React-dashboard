import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getOneSubCategoryAction ,EditSubCategoryAction } from '../../Actions/SubCategoryAction'
import {useParams} from "react-router-dom"





const EditSubCatrgoryHooks = () => {

    const {id} = useParams()

    const dispatch = useDispatch()


    const [name,setName]=useState("")
    const [category,setCategory]=useState("")

    const [ispress,SetIspress]=useState(false)
    const [loading , setLoading] =useState(true)


    useEffect(()=>{

        const run =async()=>{

           await dispatch(getOneSubCategoryAction(id))

        }
        run()
    },[])




    const Item = useSelector((state)=>state.SubCategoryReducer.getOneSubCategory)
    

    useEffect(()=>{
        if(Item){

            setName(Item.name);
            setCategory(Item.category);
        }
    },[Item])




    const onChangeName =(event)=>{
        event.persist();
        setName(event.target.value)
    }

    const onChangeCategory =(event)=>{
        event.persist();
        setCategory(event.target.value)
    }


    const handelEditSubmit =(event)=>{
        event.preventDefault() 
        setLoading(true)
        dispatch(EditSubCategoryAction({name:Item.name,category:Item.category}))
        setName("")
        setCategory("")
        setLoading(false)
       }


       useEffect(()=>{
        if(loading === false){
          setName("")
          setCategory("")
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
      

    return {name,onChangeName ,category, onChangeCategory,handelEditSubmit ,ispress}

}

export default EditSubCatrgoryHooks