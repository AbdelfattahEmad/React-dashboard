import React from 'react'
import "./Brands.scss"
import { useTranslation } from 'react-i18next'
import BrandCard from '../../Components/Cards/BrandCard/BrandCard'



const Brands = () => {

  const {t}=useTranslation()

  return (
    <div className="Brand_Container">
    <BrandCard/>
    <BrandCard/>
    <BrandCard/>
    </div>
  )
}

export default Brands