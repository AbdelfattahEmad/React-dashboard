import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Card } from 'react-bootstrap'
import bag11 from "../../../../assets/Images/bag11.avif"
import "./CategoryCard.scss";




const CategoryCard = (props) => {

    const {t}=useTranslation()

  return (

    <>

    <Card style={{ width: '18rem' }}  className='Category_Card'>
      <Card.Img variant="top" src={bag11} />
      <Card.Body>
        <Card.Title>{t("Category Title")}</Card.Title>
        <Card.Text>
            {t("Category Descreption")}
        </Card.Text>
        <Button variant="primary" className='p-2'>{t("show Category")}</Button>
      </Card.Body>
    </Card>


    </>
  )
}

export default CategoryCard