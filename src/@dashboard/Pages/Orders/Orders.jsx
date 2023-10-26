import React from 'react'
import { useTranslation } from 'react-i18next'

const Orders = () => {

  const {t}=useTranslation()


  return (
    <div> {t("orders")}</div>
  )
}

export default Orders