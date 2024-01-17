import React from 'react'
import "./Signup.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faG } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch} from 'react-redux'
import SignHook from '../../../Redux/Hooks/AuthHooks/SignHook';
import { useNavigate } from "react-router-dom";


const SignSchema = Yup.object().shape({
  name:Yup.string(),
  email:Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Requireds , Fill in the data'),
    password:Yup.number(),
    passwordConfirm:Yup.number()
    .min(8, 'Too Short')
    .required('Requireds'),
    phone:Yup.number()
    .min(11,'Too Short must be 11 numbers!')
    .required('Required'),
});


const Signup = () => {

  const {signup}=SignHook()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const {
    handleChange,
    handleBlur,
    handleReset,
    handleSubmit,
    errors,
    touched,
    values,
  } = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:'',
      passwordConfirm:"",  
      phone:"",
    },
    onSubmit:values=> {

      signup(values)
      console.log("hello")
      handleReset()
      navigate("/")

    },
    validationSchema : SignSchema
  });


  return (
    <div className="Signup_Container">

    <div className="title">
      <h5>Create a New Account</h5>
      <p>Get your free velzon account now</p>
    </div>

    <div className="input_container">

    <Form  onSubmit={handleSubmit} className="Form" >
      

      <Form.Group className="mb-3" >
        <Form.Control  name="name"
         value={values.name}
          onChange={handleChange} 
          onBlur={handleBlur} 
           className='input'
            type="name" placeholder="Enter Name" />

      </Form.Group>
      {
        touched.name && errors.name ?<p className='error'>{errors.name}</p>:null
      }


      <Form.Group className="mb-3" >
        <Form.Control
        name="email"
         value={values.email}
         onChange={handleChange}
          onBlur={handleBlur} 
         className='input'
          type="email"
           placeholder="Enter Email" />

      </Form.Group>

      {
        touched.email && errors.email ?<p className='error'>{errors.email}</p>:null
      }





      <Form.Group className="mb-3">
        <Form.Control 
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur} 
        className='input'
         type="password" 
         placeholder="Enter Password" />
      </Form.Group>

      {
        touched.password && errors.password ?<p className='error'>{errors.password}</p>:null
      }




      <Form.Group className="mb-3" >
        <Form.Control
        name="passwordConfirm"
        value={values.passwordConfirm}
        onChange={handleChange}
        onBlur={handleBlur} 
         className='input'
          type="password" 
          placeholder="passwordConfirm" />
      </Form.Group>
      {
        touched.passwordConfirm && errors.passwordConfirm ?<p className='error'>{errors.passwordConfirm}</p>:null
      }


      


      <Form.Group className="mb-1" >
        <Form.Control
        name="phone"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur} 
         className='input'
          type="Phone number"
           placeholder="Enter Phone Number" />
      </Form.Group>
      {
        touched.phone && errors.phone ?<p className='error'>{errors.phone}</p>:null
      }



      <Button className="Button" type="Submit">Sign up</Button>

    </Form>



    <div className="media">
      <p>Create Account with</p>

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