import React from 'react'
import "./sidebar.scss"
import logo from "../../assets/Images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCartShopping, faCircleHalfStroke, faCube, faGaugeHigh, faGear, faRegistered, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faAutoprefixer, faBandcamp, faJediOrder, faProductHunt } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <div className='Sidebar_Container'>

        <div className='Sidebar_Logo'>
            <Link to="/">
            <img src={logo} alt='Logo' />
            </Link>
          
        </div>

        <p className='Title'> Menu</p>


        <ul className='Sidebar_link '>
            <li style={{color: "#ffffff" }}>
            <FontAwesomeIcon icon={faGaugeHigh} style={{color: "#ffffff", paddingRight:15}} />
            <Link to="Categories" style={{textDecoration:"none", color:"#ffff"}}>Categories</Link>
            </li>
        </ul>

        <ul className='Sidebar_link '>
            <li style={{color: "#ffffff" }}>

            <FontAwesomeIcon icon={faCircleHalfStroke}  style={{color: "#ffffff", paddingRight:15}} />
            <Link to="SubCategories" className='Link'  style={{textDecoration:"none"}}>SubCategories</Link>
            </li>
        </ul>

        <ul className='Sidebar_link '>
            <li style={{color: "#ffffff" }}>
            <FontAwesomeIcon icon={faBandcamp} style={{color: "#ffffff", paddingRight:15}} />
            <Link to="Brands" className='Link'  style={{textDecoration:"none"}} >Brands</Link>
            </li>
        </ul>


        <ul className='Sidebar_link '>
            <li style={{color: "#ffffff" }}>

            <FontAwesomeIcon icon={faProductHunt}style={{color: "#ffffff", paddingRight:15}} />
            <Link to="Products" className='Link'  style={{textDecoration:"none"}}>Products</Link>
            </li>
        </ul>

        <ul className='Sidebar_link '>

            <li style={{color: "#ffffff" }}>

            <FontAwesomeIcon icon={faCube} style={{color: "#ffffff", paddingRight:15}} />
            <Link to="Coupons" className='Link'  style={{textDecoration:"none"}} >Coupons</Link>
            </li>
        </ul>


        <ul className='Sidebar_link '>

            <li style={{color: "#ffffff" }}>


            <FontAwesomeIcon icon={faJediOrder} style={{color: "#ffffff", paddingRight:15}} />

            <Link to="Orders" className='Link'  style={{textDecoration:"none"}} >Orders</Link>
            </li>
        </ul>


        <ul className='Sidebar_link '>

        <li style={{color: "#ffffff" }}>
        <FontAwesomeIcon icon={faGear} style={{color: "#ffffff", paddingRight:15}}/>

        <Link to="Settings" className='Link'  style={{textDecoration:"none"}} >Settings</Link>
        </li>

        </ul>

        <ul className='Sidebar_link '>
        <li style={{color: "#ffffff" }}>
        <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", paddingRight:15}} />
        <Link to="Users" className='Link'  style={{textDecoration:"none"}} >Users</Link>
        </li>

        </ul>

        <ul className='Sidebar_link '>

            <li style={{color: "#ffffff" }}>

            <FontAwesomeIcon icon={faAutoprefixer} style={{color: "#ffffff", paddingRight:15}} />

            <Link to="Auth" className='Link'  style={{textDecoration:"none"}}>Authentaction</Link>

            </li>

        </ul>

        <ul className='Sidebar_link '>

            <li style={{color: "#ffffff" }}>

            <FontAwesomeIcon icon={faRegistered} style={{color: "#ffffff", paddingRight:15}}  />

            <Link to="Reviews" className='Link'  style={{textDecoration:"none"}} >Reviews</Link>

            </li>

        </ul>


        <ul className='Sidebar_link '>

            <li style={{color: "#ffffff" }}>

            <FontAwesomeIcon icon={faAddressBook} style={{color: "#ffffff", paddingRight:15}}  />
            <Link to="UserAdress" className='Link'  style={{textDecoration:"none"}} >User Adresses</Link>
            </li>

        </ul>

    </div>
  )
}

export default Sidebar