import React from 'react'
import { useTranslation } from 'react-i18next'


const Users = () => {
  const {t}=useTranslation()

  return (
    <div>{t("user data")}</div>
  )
}

export default Users