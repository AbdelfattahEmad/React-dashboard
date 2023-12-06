
import { useEffect, useState  } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import empty from "../../../assets/Images/empty.png"
import { CreateCategoryAction } from '../../Actions/CategoryAction'
import notify from '../../../@dashboard/Components/Notify'



const AddCategoryHook = () => {


const [img,setImg]=useState(empty)

const [name,setName]=useState("")


const [loading , setLoading] =useState(true)

const [selectedFile,SetselectedFile]=useState(null)

const [ispress,SetIspress]=useState(false)

const dispatch = useDispatch()



const res = useSelector((state)=>state.CategoryReducer.createCategory)


//image change 
const onImageChange = (e) =>{

  if(e.target.files && e.target.files[0]){
    setImg(URL.createObjectURL(e.target.files[0]))
    SetselectedFile(e.target.files[0])
  }
}

//name change
const OnChangeName = (e)=>{
    setName(e.target.value)
}



//Button Submit
const HandelSubmit= async (e)=>{
  e.preventDefault();
  const formData =new FormData()

  if(name === "" ||selectedFile === null ){
    notify("please Complete The Data" , "warn")
    return ;
  }

  formData.append("name" , name)
  formData.append("image" , selectedFile)

  setLoading(true)
  SetIspress(true)
   await dispatch(CreateCategoryAction(formData))
   
   setLoading(false)

}

useEffect(()=>{

  if(loading === false){
    setImg(empty)
    setName("")
    SetselectedFile(null)
    setLoading(false)

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

return {img,name ,loading ,onImageChange ,OnChangeName ,HandelSubmit ,ispress  }

}

export default AddCategoryHook
