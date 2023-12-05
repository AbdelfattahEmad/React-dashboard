import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditCategoryAction, getCategoryAction } from '../../Actions/CategoryAction'


const EditCatrgoryHooks = () => {

    const dispatch = useDispatch()

    const deletedId= useRef(null)

    const setId =(id)=>{
        deletedId.current=id
      }
      


    const [editID,setEditId]=useState("")
    const [editName,setEditName]=useState("")

    useEffect(()=>{

        const run =async()=>{
           await dispatch(getCategoryAction(deletedId.current))

           
           await dispatch(EditCategoryAction(deletedId.current))

        }
        run()
    },[])

    const EditCategory =useSelector((state)=>state.CategoryReducer.EditCategory)
    const Item = useSelector((state)=>state.CategoryReducer.category)

    console.log(Item)
    

    useEffect(()=>{
        if(Item){

            setEditId(Item._id);
            setEditName(Item.name);
        }

    },[Item])

    const onChangeId =(event)=>{
        event.persist()
        setEditId(event.target.value)
    }

    const onChangeName =(event)=>{
        event.persist();
        setEditName(event.target.value)
    }

    const handelEditSubmit =(event)=>{
        event.preventDefault() 
       }


return{editID , onChangeId,editName ,onChangeName , setId,handelEditSubmit}

}

export default EditCatrgoryHooks