import React from 'react'
import "./Products.scss"
import Tabel from '../../Components/Tabel/Tabel'
import abdo from "../../../assets/Images/abdo.jpg"
import TitleView from '../../Components/TitleView/TitelView'

const Products = ({id ,img,Descreption ,quantity ,Price , title , btn, pathText,SubCat}) => {

  return (

      <div className='Product_Container'>

        <TitleView title="Product Page" btn="Add Product" pathText="AddProduct" />
        
        <Tabel id="1"  img={abdo} Descreption="edeeded" quantity="5"  Price="15" SubCat="Clothes " />


        </div>




  )
}

export default Products