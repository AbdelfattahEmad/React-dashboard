import { faGear } from '@fortawesome/free-solid-svg-icons';
import "./Notifction.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import abdo from "../../../assets/Images/abdo.jpg"
import bell from "../../../assets/Images/bell.png"
import { useTranslation } from 'react-i18next';




const NotifictionTap = () => {

  const {t} =useTranslation()

  return (
    <div className='Notifictions_head'>

    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
    >

      <Tab eventKey="All" title="All (4)" className='Tab_head'>

            <div className='Tab_item'>
                <FontAwesomeIcon icon={faGear} style={{color: "#c4cfe4",}} />
                 <p>{t("you Have notifction")} </p>
                    <Form.Check aria-label="option 1" />
            </div>

            <div className='Tab_item'>
                <FontAwesomeIcon icon={faGear} style={{color: "#c4cfe4",}} />
                <p>{t("you Have notifction")} </p>
                    <Form.Check aria-label="option 1" />
            </div>

            <div className='Tab_item'>
                <FontAwesomeIcon icon={faGear} style={{color: "#c4cfe4",}} />
                <p>{t("you Have notifction")} </p>
                    <Form.Check aria-label="option 1" />
            </div>


            <div className='Tab_item'>
                <FontAwesomeIcon icon={faGear} style={{color: "#c4cfe4",}} />
                <p>{t("you Have notifction")} </p>
                    <Form.Check aria-label="option 1" />
            </div>




      </Tab>



      <Tab eventKey="Message" title="Message" className='Tab_head'>

      <div className='Tab_item '>
        <img src={abdo} />
        <p>{t("you may have a new message")} </p>
                    <Form.Check aria-label="option 1" />
            </div>

            <div className='Tab_item '>
        <img src={abdo} />
        <p>{t("you may have a new message")} </p>
                    <Form.Check aria-label="option 1" />
            </div>

            <div className='Tab_item '>
          <img src={abdo} />
          <p>{t("you may have a new message")} </p>
                      <Form.Check aria-label="option 1" />
            </div>

          <div className='Tab_item '>
            <img src={abdo} />
            <p>{t("you may have a new message")} </p>
            <Form.Check aria-label="option 1" />
          </div>
      </Tab>


      <Tab eventKey="Alerts" title="Alerts" className='Alerts' >

        <img src={bell} />

        <h2> {t("Hey! You have no")} <br />  {t("any notifications")}</h2>

      </Tab>
    </Tabs>
    

    </div>
  )
}

export default  NotifictionTap