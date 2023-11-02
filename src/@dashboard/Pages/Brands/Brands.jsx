import React from 'react'
import "./Brands.scss"
import { useTranslation } from 'react-i18next'
import BrandCard from '../../Components/Cards/BrandCard/BrandCard'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



const Brands = () => {

  const {t}=useTranslation()

  return (
    <>

    <div className="Brand_Container">
    <BrandCard/>
    <BrandCard/>
    <BrandCard/>
    <BrandCard/>
    </div>

    </>

  )
}

export default Brands