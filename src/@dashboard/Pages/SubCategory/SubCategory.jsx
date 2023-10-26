import React from 'react'
import { useTranslation } from 'react-i18next'

const SubCategory = () => {

  const {t}=useTranslation()

  return (

    <div> {t("subcategories")}</div>

  )
}

export default SubCategory