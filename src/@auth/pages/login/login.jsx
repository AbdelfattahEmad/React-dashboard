import React from "react";
import "./login.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faG } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

  return (
  <div className="Login_Container">
    <div className="title">
      <h5>Welcome</h5>
      <p>Sign in to continue to Velzon.</p>
    </div>

    <div className="input_container">

    <Form className="Form">

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">Username </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
    </Form>
    <Button className="Button" type="submit">Sign in</Button>


    <div className="media">
      <p>Sign in with</p>


      <div className="images">

<FontAwesomeIcon icon={faFacebook} size='lg' style={{color: "#0953d3",marginRight:5}} />

<FontAwesomeIcon icon={faG} size="xl" style={{color: "#e06d10",marginRight:5}} />   

<FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#17191c", marginRight:5}} />

<FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#407add",}} />



      </div>

      
    </div>

    </div>

    <div className="note">
      <p>Dont Have any Account ?<span><Link to="signup" className="Link">sign up</Link></span></p>
    </div>
  </div>
  )

};

export default Login
