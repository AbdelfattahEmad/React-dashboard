import React from 'react'
import "./Category.scss"
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bag11 from "../../../assets/Images/bag11.avif"
import bag22 from "../../../assets/Images/bag22.jpg"
import bag33 from "../../../assets/Images/bag33.jpg"




const Category = () => {

  const {t}=useTranslation()

  return (
    <div className='Category_Container'>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bag11} />
      <Card.Body>
        <Card.Title>{t("Category Title")}</Card.Title>
        <Card.Text>
            {t("Category Descreption")}
        </Card.Text>

        <Button variant="primary" className='p-2'>{t("show Category")}</Button>

      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bag22} />
      <Card.Body>
        <Card.Title>{t("Category Title")}</Card.Title>
        <Card.Text>
            {t("Category Descreption")}
        </Card.Text>

        <Button variant="primary" className='p-2'>{t("show Category")}</Button>

      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bag33} />
      <Card.Body>
        <Card.Title>{t("Category Title")}</Card.Title>
        <Card.Text>
            {t("Category Descreption")}
        </Card.Text>

        <Button variant="primary" className='p-2'>{t("show Category")}</Button>

      </Card.Body>
    </Card>



       </div>
  )
}

export default Category