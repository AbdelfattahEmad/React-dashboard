import React from 'react'
import "./Brands.scss"
import { useTranslation } from 'react-i18next'
import Card from 'react-bootstrap/Card';
import gu from "../../../assets/Images/gu.png"
import ad from "../../../assets/Images/ad.png"



const Brands = () => {

  const {t}=useTranslation()

  return (
    <div className='Brand_Container'>
      <Card style={{ width: '18rem' }} className='Card'>
        <Card.Img variant="top" src={gu} />
        <Card.Body>
          <Card.Title>{t("Brand Title")}</Card.Title>
          <Card.Text>
              {t("Brand Descreption")}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }} className='Card'>
        <Card.Img variant="top" src={ad} />
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

export default Brands