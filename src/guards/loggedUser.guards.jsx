import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import notify from '../@dashboard/Components/Notify'
import { useNavigate } from "react-router-dom";




const LoggedUserGuards = ({children}) => {

    const navigate = useNavigate()

    const user = useSelector((state)=>state.AuthReducer.signIn)




    useEffect(()=>{

        if(!user){

            navigate("/")
        }

    },[navigate , user])


        if(user && user?.data?.role === "admin"){

            return ( <>{children}</>)
              
    
        }else if(user && user?.data?.role === "user"){

            notify("Can't login! ","error")
            return
        }
           
            
        

    




}

export default LoggedUserGuards