import React from 'react'
import "./Main.scss"
import { useTranslation } from 'react-i18next'
import  Slider  from "../../Components/Slider/Slider"


const Main = () => {

  const {t} = useTranslation()

  return (

    <div className='Main_Container'>

     <Slider />

    </div>
  )
}

export default Main