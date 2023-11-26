import React, { useState  } from 'react'
import { useDispatch} from 'react-redux'
import "./AddCategory.scss"
import empty from "../../../../assets/Images/empty.jpg"
import { CreateCategoryAction } from '../../../../Redux/Actions/CategoryAction'


const AddCategory = () => {

    const [img,setImg]=useState(empty)

    const [name,setName]=useState("")

    const [id,setId]=useState("")

    const [selectedFile,SetselectedFile]=useState(null)

    const dispatch = useDispatch()



    //loading
    const Loading = useSelector((state)=>state.CategoryReducer.loading)


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

    //id change
    const OnChangeId =(e)=>{
      setId(e.target.value)
    }


    //Button Submit
    const HandelSubmit=(e)=>{
      e.preventDefault();
      const formData =new FormData()

      formData.append("name" , name)
      formData.append("image" , selectedFile)


      dispatch(CreateCategoryAction(formData))


    }


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

          <input type='text' placeholder='id' value={id} onChange={OnChangeId} />
          <input type='text' placeholder='Name' value={name} onChange={OnChangeName} />

          <button className='Btn_sub' onClick={HandelSubmit}>Submit</button>
        </div>

    </div>
  )
}

export default AddCategory