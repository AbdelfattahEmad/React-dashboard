import React from 'react'
import { useTranslation } from 'react-i18next'


const Users = () => {

  const {t}=useTranslation()

  return (

    <div className="Users_Container">

      <div>{t("user data")}</div>




    </div>

  )
}

export default Users