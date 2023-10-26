import React from 'react'
import { useTranslation } from 'react-i18next'

const Reviews = () => {
  const {t}=useTranslation()

  return (

    <div> {t("Reviews")}</div>
  )
}

export default Reviews