
import { useEffect, useState  } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { SignUpAction } from '../../Actions/AuthActions'





const SignHook = () => {

    const [loading , setLoading] =useState(true)

    const dispatch = useDispatch()


    const res = useSelector(state=>state.AuthReducer.createUser)
    console.log(res)

    const signup = async (values)=>{
        setLoading(true)
         await dispatch(SignUpAction(values))
         setLoading(false)
      }
      

    useEffect(()=>{


        if(loading === false){
            setLoading(false)
        
            if(res === 201) {
        
              notify("Mission sucssufuly","success");
        
            }else if(res === 404){
        
                notify("Mission Failed","error");
            }
        
          }
        

    },[loading])




 return{signup}
}

export default SignHook