import React from 'react'
import "./Settings.scss"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const Settings = () => {

  const {t}=useTranslation()

  return (

    <div className='Settings'>
      <h2>{t("Settings")}</h2>



      <div className='options'>
        <Link className='link'>& Privacy and Security</Link>


      </div>

      <div className='options'>
        <Link className='link'>& Change Password</Link>


      </div>


      <div className='options'>
        <Link className='link'>& Default browser</Link>


      </div>


      

      <div className='options'>
        <Link className='link'>& Performance</Link>


      </div>



      <div className='options'>
        <Link className='link'>& Languages</Link>


      </div>


      

      <div className='options'>
        <Link className='link'>& Apperance</Link>


      </div>

      <div className='options'>
        <Link className='link'>& About</Link>


      </div>

      <div className='options'>
        <Link className='link'>& system</Link>


      </div>


      <div className='options'>
        <Link className='link'>& Log out</Link>


      </div>

    </div>

    
    
  )
}

export default Settings