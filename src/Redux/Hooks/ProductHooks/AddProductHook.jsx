import { useEffect, useState  } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import notify from '../../../@dashboard/Components/Notify'
import { AddProductAction , getProductAction } from '../../Actions/ProductAction'
import { getCategoryAction } from '../../Actions/CategoryAction'
import { getSubCategoryAction } from '../../Actions/SubCategoryAction'


const AddProductHooks = () => {

const [loading , setLoading] =useState(true)
const [ispress,SetIspress]=useState(false)
const [img,setImg]=useState(null)
const [imageCover,setImageCover]=useState(null)



const dispatch = useDispatch()


const res = useSelector((state)=>state.ProductReducer.AddProducts)
const categories = useSelector((state)=>state.CategoryReducer.category)
const Subcategories = useSelector((state)=>state.SubCategoryReducer.Subcategory)



//Button Submit
const saveproduct = async (formData)=>{

  setLoading(true)
  SetIspress(true)
   await dispatch(AddProductAction(formData))
   setLoading(false)
}

useEffect(()=>{

  if(loading === false){
    setLoading(false)

    setTimeout(()=>{
      SetIspress(false)
    },2000)


    if(res === 201) {

      notify("Mission sucssufuly","success");

    }else if(res === 404){

        notify("Mission Failed","error");
    }

  }

},[loading])



useEffect(()=>{
  dispatch(getCategoryAction())
  dispatch(getSubCategoryAction())
  
},[])



useEffect(()=>{

  dispatch(getProductAction())


},[])


const uploadImage=(e)=>{

  setImg(e.target.files[0])

}

const uploadImageCover=(e)=>{
  setImageCover(e.target.files[0])

}


return { uploadImage,uploadImageCover,img,setImg , imageCover,setImageCover ,loading,saveproduct,ispress , categories ,Subcategories }

}

export default AddProductHooks