import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Users.scss";



const Users = () => {

  const {t} =useTranslation()

  return (

    <div className="Users_Container">

      <div className='Title'>{t("User Data")}</div>

      <div className='user_info'>
        <img src="" alt='abdo' />
        <h2>Name : Mohamed emad </h2>
        <p>Age  : 28</p>
        <p>phone number : 01069650234</p>
        <p>Adress : Shebin Elkom Menofia </p>
      
      </div>


      <div className='user_info'>
        <img src="" alt='abdo' />
        <h2>Name : Mohamed emad </h2>
        <p>Age  : 28</p>
        <p>phone number : 01069650234</p>
        <p>Adress : Shebin Elkom Menofia </p>
       

      </div>







    </div>

  )
}

export default Users