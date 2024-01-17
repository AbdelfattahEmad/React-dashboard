import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import notify from '../@dashboard/Components/Notify'
import { useNavigate } from "react-router-dom";
import {   Routes,Route } from 'react-router-dom';




const LoggedUserGuards = ({children}) => {

    const navigate = useNavigate()

    const user = useSelector((state)=>state.AuthReducer.signIn)

    console.log("gard Body")



    useEffect(()=>{
        console.log("gard  use effect")

        if(!user){
            console.log("gard user")


            navigate("/")
        }

    },[navigate , user])


        if(user && user?.data?.role === "admin"){
            console.log("gard admin")

            return ( <>{children}</>)
              
    
        }else if(user && user?.data?.role === "user"){
            console.log("gard Body user")

            notify("Can't login! ","error")
            return
        }
           
            
        

    




}

export default LoggedUserGuards