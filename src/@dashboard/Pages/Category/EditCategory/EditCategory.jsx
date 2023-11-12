import React from 'react'
import "./EditCategory.scss"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const EditCategory = () => {
  return (
    <div className='Edit_Container'>

      <div className='Forms'>

        <h2> Edit Category </h2>

        <Form.Control type="Text" placeholder="Id"  className="input" />

        <Form.Control type="Text" placeholder="Category Name" className="input" />

        <Form.Control type="Text" placeholder="Descreption" className="input" />

        <Form.Control type="Text" placeholder="Quaintaty" className="input" />

        <Form.Control type="Text" placeholder="Price" className="input" />

        <Button className='BtN'>  Save Edit </Button>
        </div>

    </div>
  )
}

export default EditCategory