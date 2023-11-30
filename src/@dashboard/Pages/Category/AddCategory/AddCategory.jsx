import React, { useEffect, useState  } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import "./AddCategory.scss"
import empty from "../../../../assets/Images/empty.jpg"
import { CreateCategoryAction } from '../../../../Redux/Actions/CategoryAction'
import Spinner from 'react-bootstrap/Spinner';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const AddCategory = () => {

  const notify = (msg, type) => {
        if(type === "warn")
            toast.warn(msg)
        else if(type === "success")
            toast.success(msg)
        else if(type === "error")
            toast.error(msg)

  };
  


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

        }else{
          notify("Error","error")
        }

      }
    

    },[loading])





  return (
    
    <div className='AddCategory_Head'>
      <h2>Add Category</h2>

        <div className='inputs'>

          <div className='text-center'>

              <label for="upload-photo">

              <img src={img} height="150px"
              width="150px" alt='fzx'
                style={{cursor:"pointer" ,
                textAlign :"center" ,
                  borderRadius:"8px"}} />

              </label>

              <input type='file'
              name='photo'
              onChange={onImageChange}
              id='upload-photo'
              />

          </div>

          <input type='text' placeholder='Name' value={name} onChange={OnChangeName} />
          <button className='Btn_sub' onClick={HandelSubmit}>Submit</button>
        </div>

        {
          ispress ? loading ? <Spinner animation="border" role="status"></Spinner>:
          <span style={{textAlign:"center", fontSize:"30px",padding:"5px" }}>Done 
            <FontAwesomeIcon icon={faCheck} style={{color: "#3bf109",}} /> </span>:null

        }
        <ToastContainer />
    </div>
  )
}

export default AddCategory