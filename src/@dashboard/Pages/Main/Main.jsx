import React from 'react'
import Category from '../Category/Category'
import Products from '../Products/Products'
import Brands from '../Brands/Brands'
import TitelView from '../../Components/TitleView/TitelView'
import "./Main.scss"
import { useTranslation } from 'react-i18next'

const Main = () => {

  const {t} = useTranslation()
  return (
    <div className='Main_Container'>


         <TitelView name={t("Categorys")} pathText="Categories" /> 
        <Category />


        <TitelView name={t("Products")}  pathText="Products"/> 
        <Products />



        <TitelView name={t("Brands")} pathText="Brands" />
        <Brands />
        
        
    </div>
  )
}

export default Main