import React from 'react'
import { useTranslation } from 'react-i18next'

const Category = () => {
  const {t}=useTranslation()

  return (
    <div> {t("categories")}</div>
  )
}

export default Category