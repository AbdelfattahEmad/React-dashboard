import React from 'react'
import "./Reviews.scss"
import { useTranslation } from 'react-i18next'
import abdo from "../../../assets/Images/abdo.jpg"

const Reviews = () => {
  const {t}=useTranslation()

  return (
    <div className='Container_review'>

      <h2> {t("Reviews")}</h2 >


      <div className='inputs'>


      <input  className='input' type='textarea'  placeholder='The Name' /> 

      <input  className='input' type='textarea'  placeholder='Put Your Opinion' /> 
      <button>Submit</button>



        </div>  



<div className='person_info'>

  <img src={abdo} alt='' />

    <h5> mr mohmed </h5>
    <p> my opinii is this website is very wonderful one </p>


</div>

<div className='person_info'>

  <img src={abdo} alt='' />

    <h5> mr mohmed </h5>
    <p> my opinii is this website is very wonderful one </p>


</div>


    </div>

  )
}

export default Reviews