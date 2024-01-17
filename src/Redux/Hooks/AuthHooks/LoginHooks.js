import { useEffect, useState  } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { SignInAction} from '../../Actions/AuthActions'
import Spinner from 'react-bootstrap/Spinner';
import { use } from 'i18next';
import { useNavigate } from "react-router-dom";







const LoginHooks = () => {

    const [loading , setLoading] =useState(true)

    const dispatch = useDispatch()
    const navigate = useNavigate()



    const user = useSelector(state=>state.AuthReducer.signIn)

      



    const LOgIn = async (values)=>{
        setLoading(true)
         await dispatch(SignInAction(values))

         setLoading(false)
      }
      





 return{LOgIn , loading } 
} 

export default LoginHooks