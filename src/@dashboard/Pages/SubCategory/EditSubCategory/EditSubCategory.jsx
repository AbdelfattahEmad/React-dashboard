import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import "./EditSubCategory"


const Edit = () => {
  return (
    <div className='Edit_Container'>


    <div className='Edit_Title'>
    <h3>Edit Section</h3>
    <Button className='BTN'>Save Edit</Button>
    </div>



    <div className='Information_inputs'>
    <Form>
    <Form.Group className="mb-3" >
      <Form.Label>First Name </Form.Label>
      <Form.Control  placeholder="First Name" />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Last Name</Form.Label>
      <Form.Control  placeholder="Last Name" />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>The original administration</Form.Label>
      <Form.Control  placeholder="The original administration" />
    </Form.Group>



    <Form.Group className="mb-3" >
      <Form.Label>Administration number</Form.Label>
      <Form.Control  placeholder="Administration number" />
    </Form.Group>


    <Form.Group className="mb-3" >
      <Form.Label>The duration of the transaction</Form.Label>
      <Form.Control  placeholder="The duration of the transaction" />
    </Form.Group>






    <Form.Group className="mb-3" >
    <Form.Label>Number of transactions </Form.Label>

      <Form.Check type="checkbox" label="unified" />

      <Form.Check type="checkbox" label="private" />

    </Form.Group>





    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>



    </div>

  </div>

    )
}

export default Edit