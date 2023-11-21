import React from 'react'
import "./Brands.scss"
import { useTranslation } from 'react-i18next'
import Tabel from '../../Components/Tabel/Tabel'
import abdo from "../../../assets/Images/abdo.jpg"
import TitleView from '../../Components/TitleView/TitelView'




const Brands = ({id ,img,Descreption ,quantity ,Price , title , btn, pathText,SubCat  }) => {

  const {t}=useTranslation()

  return (

    <div className="Brand_Container">


    <TitleView title="Brand Page" btn="AddBrand" pathText="AddBrand" />

    <Tabel id="1"  img={abdo} Descreption="Good"  Price="15" SubCat="Clothes" />

    </div>


  )
}

export default Brands