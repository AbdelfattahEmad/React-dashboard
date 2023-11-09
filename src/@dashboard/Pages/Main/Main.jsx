import React from 'react'
import "./Main.scss"
import { useTranslation } from 'react-i18next'


const Main = () => {

  const {t} = useTranslation()

  return (
    <div className='Main_Container'>

      Welcome To our WebSite 

    </div>
  )
}

export default Main