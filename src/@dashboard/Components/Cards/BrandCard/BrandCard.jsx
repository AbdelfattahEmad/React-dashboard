import React from 'react'
import { useTranslation } from 'react-i18next'
import {  Card } from 'react-bootstrap'
import gu from "../../../../assets/Images/gu.png"
import "./BrandCard.scss"





const BrandCard = (props) => {

    const {t}=useTranslation()

  return (

    <div className='Brand_Container'>


    <Card style={{ width: '18rem' }} className='Brand_Card'>
      <Card.Img variant="top" src={gu} />
      <Card.Body>
        <Card.Title>{t("Brand Title")}</Card.Title>
        <Card.Text>
            {t("Brand Descreption")}
        </Card.Text>
      </Card.Body>
    </Card>


    </div>


  )
}

export default BrandCard ;