import React from 'react'
import "./Subcategory.scss"
import { useTranslation } from 'react-i18next'
import TitleView from '../../Components/TitleView/TitelView';
import Tabel from '../../Components/Tabel/Tabel';
import abdo from "../../../assets/Images/abdo.jpg"


const SubCategory = ({id ,img,Descreption ,quantity ,Price , title , btn, pathText,SubCat}) => {

  const {t}=useTranslation()

  return (
    <div className='Sub_Container'>

    <div className='Tabel_Header'>

      <TitleView title="SubCategory" btn="Add SubCategory"  pathText="AddSubCategory" />

      <Tabel id="1"  img={abdo} Descreption="edeeded" quantity="5"  Price="15" SubCat="Clothes " />


      </div>





      
      </div>



  )
}

export default SubCategory