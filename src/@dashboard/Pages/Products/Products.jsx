import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Products.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bag11 from "../../../assets/Images/bag11.avif"
import bag22 from "../../../assets/Images/bag22.jpg"
import bag33 from "../../../assets/Images/bag33.jpg"



const Products = () => {

  const {t}=useTranslation()

  return (
    
    <div className='Product_Container'>

    <Card style={{ width: '18rem' }} className='Card'>
      <Card.Img variant="top" src={bag11} />
      <Card.Body>
        <Card.Title>{t("Product Title")}</Card.Title>
        <Card.Text>
            {t("Product Descreption")}
        </Card.Text>
        <Button variant="primary" >{t("show Product")}</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} className='Card'>
      <Card.Img variant="top" src={bag22} />
      <Card.Body>
        <Card.Title>{t("Product Title")}</Card.Title>
        <Card.Text>
            {t("Product Descreption")}
        </Card.Text>
        <Button variant="primary" >{t("show Product")}</Button>
      </Card.Body>
    </Card>

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


      
      
      
      
       </div>



  )
}

export default Products