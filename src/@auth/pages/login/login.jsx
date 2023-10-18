import React from "react";
import "./login.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import fb from "../../../assets/Images/fb.png";
import gm from "../../../assets/Images/gm.png";
import git from "../../../assets/Images/git.png";
import w from "../../../assets/Images/w.png";





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

        <img src="w"  />
        <img src="gm"  />
        <img src="git"  />
        <img src="tw" />

      </div>
      
    </div>



    </div>
    

    
  </div>
  )

};

export default Login
