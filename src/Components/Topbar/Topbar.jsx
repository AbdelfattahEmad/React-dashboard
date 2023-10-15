import React from 'react'
import "./Topbar.scss"
import egypt from"../../assets/Images/egypt.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars, faBell} from '@fortawesome/free-solid-svg-icons'
import abdo from "../../assets/Images/abdo.jpg"
import eng from "../../assets/Images/eng.png"

import NavDropdown from 'react-bootstrap/NavDropdown';




const Topbar = () => {

  return (

    <div className='Topbar_Container'>
      
      <div className='search_item'> 
      <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#878a99", marginRight:10}} />

        <input  placeholder='Search...' alt="search"/>

      </div>

      <div className='Personal_Data'>



        <div className='Icons'>


        <div className='img'>
        <NavDropdown
              id="nav-dropdown-dark-example"
              title="language"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">
              <img src={egypt} alt='egypt'/>   
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <img src={eng} alt='egypt'/>   
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </div>

          <FontAwesomeIcon icon={faBell} size="xl" style={{color: "#525760", marginRight:20 ,cursor:'pointer'}} />



            </div>

            <div className='name'>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title=""
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">
                profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>



            <img src={abdo} alt="aboda" />

          <div className='data'>
            <h5>Abdelfatah</h5>
            <p>Develober</p>


        </div>



            </div>


        </div>

    </div>
    
  )
}

export default Topbar