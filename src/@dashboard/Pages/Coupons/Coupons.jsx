import React from 'react'
import { useTranslation } from 'react-i18next'

const Coupons = () => {
  
  const {t}=useTranslation()

  return (
    <div>{t("coupons")} </div>
  )
}

export default Coupons