import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bag33 from "../../../../assets/Images/bag33.jpg"
import { useTranslation } from 'react-i18next'



const ProductCard = () => {
    const {t}=useTranslation()
  return (

    <>

    <Card style={{ width: '18rem' }} className='Card'>
      <Card.Img variant="top" src={bag33} />
      <Card.Body>
        <Card.Title>{t("Product Title")}</Card.Title>
        <Card.Text>
            {t("Product Descreption")}
        </Card.Text>
        <Button variant="primary" >{t("show Product")}</Button>
      </Card.Body>
    </Card>

    </>

  )
}

export default ProductCard