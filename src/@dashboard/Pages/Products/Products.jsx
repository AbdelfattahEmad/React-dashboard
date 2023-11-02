import React from 'react'
import "./Products.scss"
import ProductCard from '../../Components/Cards/ProductCard/ProductCard'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



const Products = () => {

  return (
    <>


      <div className='Product_Container'>

        <ProductCard />
        <ProductCard />

        <ProductCard />
        <ProductCard />


        </div>

       </>



  )
}

export default Products