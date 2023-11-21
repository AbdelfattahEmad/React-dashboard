import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


const AddSubCategory= () => {
  return (
    <div className='Add_Container'>
      <div className='Title'>
      <h3>Add Section</h3>
      <Button>Save</Button>
      </div>

      <div className='Information_inputs'>
      <Form>


      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>




      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



      </div>

    </div>
  )
}

export default AddSubCategory