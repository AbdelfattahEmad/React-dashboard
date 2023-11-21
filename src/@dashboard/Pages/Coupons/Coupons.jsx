import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Coupons.scss"


const Coupons = () => {
  
  const {t}=useTranslation()

  return (
    <div className='Copons'>
      
      <h1>{t("Coupons")}</h1>

      <div className='Copon_Cards'>

        <div className='Cards'>
        <h2>50 % OFF</h2>
        <p>For Kids</p>

        </div>

        <div className='Cards'>
        <h2>30 % OFF</h2>
        <p>For Woman Clothes</p>

        </div>

        <div className='Cards'>
        <h2>20 % OFF</h2>
        <p>For Men Clothes </p>

        </div>


      </div>

      <div className='Copon_Cards'>

      <div className='Cards'>
      <h2>10 % OFF</h2>
      <p>For Old man</p>

      </div>

      <div className='Cards'>
      <h2>30 % OFF</h2>
      <p>For Woman Clothes</p>

      </div>

      <div className='Cards'>
      <h2>20 % OFF</h2>
      <p>For Men Clothes </p>

      </div>


      </div>


      
     
    
    
     </div>
  )
}

export default Coupons