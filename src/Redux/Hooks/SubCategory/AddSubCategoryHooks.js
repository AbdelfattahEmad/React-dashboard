import { useEffect, useState  } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import notify from '../../../@dashboard/Components/Notify'
import { AddSubCategoryAction} from '../../Actions/SubCategoryAction'
import { getCategoryAction } from '../../Actions/CategoryAction'


const AddSubCategoryHooks = () => {

const [loading , setLoading] =useState(true)
const [ispress,SetIspress]=useState(false)
const dispatch = useDispatch()

const res = useSelector((state)=>state.SubCategoryReducer.createSubCategory)

const categories = useSelector((state)=>state.CategoryReducer.category)




//name change



//Button Submit
const saveCategory = async (values)=>{
  setLoading(true)
  SetIspress(true)
   await dispatch(AddSubCategoryAction(values))
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

},[])

return {loading,saveCategory,ispress , categories}

}

export default AddSubCategoryHooks