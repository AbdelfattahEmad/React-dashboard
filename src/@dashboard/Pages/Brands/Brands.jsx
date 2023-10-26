import React from 'react'
import { useTranslation } from 'react-i18next'

const Brands = () => {

  const {t}=useTranslation()

  return (
    <div> {t("Brands")}</div>
  )
}

export default Brands