import React from 'react'
import "./Signup.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faG } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Signup = () => {
  return (
    <div className="Signup_Container">

    <div className="title">
      <h5>Create a New Account</h5>
      <p>Get your free velzon account now</p>
    </div>

    <div className="input_container">

    <Form className="Form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email address" />
        <Form.Text className="text-muted">
        </Form.Text>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">UserName</Form.Label>
        <Form.Control type="email" placeholder="Enter UserName" />
        <Form.Text className="text-muted">
        </Form.Text>

      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
    </Form>
    <Button className="Button" type="submit">Sign up</Button>


    <div className="media">
      <p>Create Account with </p>

      <div className="images">

      <FontAwesomeIcon icon={faFacebook} size='lg' style={{color: "#0953d3",marginRight:5}} />

      <FontAwesomeIcon icon={faG} size="xl" style={{color: "#e06d10",marginRight:5}} />   

      <FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#17191c", marginRight:5}} />

      <FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#407add",}} />
      


      </div>
      
    </div>




    </div>


  </div>

  )
}

export default Signup