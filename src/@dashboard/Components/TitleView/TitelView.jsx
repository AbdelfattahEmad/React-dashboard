import React from 'react'
import "./TitelView.scss"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const TitelView = ({name , pathText}) => {

  return (
    <>


    <div className='Titles'>

        <p>{name}</p>

    <Link className='Link_Title' to={`${pathText}`} >

    <FontAwesomeIcon icon={faEye}/>

    </Link>

    </div>


    </>
  )
}

export default TitelView