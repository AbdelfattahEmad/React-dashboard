import React, { useEffect } from "react";
import "./login.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faG } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LoginHooks from "../../../Redux/Hooks/AuthHooks/LoginHooks";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'




const SignSchema = Yup.object().shape({

  email:Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Requireds , Fill in the data'),
    password:Yup.string() 
    .min(6, 'Too Short')
    .required('Requireds')
});


const Login = () => {

  const {LOgIn ,loading}= LoginHooks()
  
  const navigate = useNavigate()

  const user = useSelector(state=>state.AuthReducer.signIn)


  useEffect(()=>{
    if(user){
      navigate("/dashboard")
    }

  },[user])


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
      email:'',
      password:''
    },
    onSubmit:values=> {

      LOgIn(values)

      

      
    },
    validationSchema : SignSchema
  });


  return (
  <div className="Login_Container">
    <div className="title">
      <h5>Welcome</h5>
      <p>Sign in to continue to Velzon.</p>
    </div>

    <div className="input_container">

    <Form  onSubmit={handleSubmit} className="Form" >

        <Form.Group className="mb-3" >
          <Form.Control
                name="email"
                value={values.email}
                onChange={handleChange}
                 onBlur={handleBlur} 
                className='input'
                type="email"
                placeholder="Enter email" />
        </Form.Group>

        {
        touched.email && errors.email ?<p className='error'>{errors.email}</p>:null
        }


      <Form.Group className="mb-3" >
        <Form.Control type="password"
         placeholder="Enter Password"
         name="password"
         value={values.password}
         onChange={handleChange}
         onBlur={handleBlur}
         className='input'

          />
      </Form.Group>

      {
        touched.password && errors.password ?<p className='error'>{errors.password}</p>:null
      }



      <Button className="Button" type="submit">Sign in</Button>
    </Form>


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
