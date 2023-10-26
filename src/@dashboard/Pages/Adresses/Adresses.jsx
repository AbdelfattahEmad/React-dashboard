import React from 'react'
import { useTranslation } from 'react-i18next'

const Adresses = () => {
  
  const {t}=useTranslation()

  return (

    <div>{t("user data")}</div>
    
  )
}

export default Adresses