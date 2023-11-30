import React from 'react'
import "./EditCategory.scss"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const EditCategory = () => {

  const {id} =useParams()


  return (
    <div className='Edit_Container'>

      <div className='Forms'>
        
        <h5>Edit Category</h5>

        <Form.Control type="Text" placeholder="Id"  className="input" />

        <Form.Control type="Text" placeholder="Category Name" className="input" />


        <Button className='BtN'>Save Edit</Button>
        </div>

    </div>
  )
}

export default EditCategory