import React from "react";
import "./Reviews.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'




const SignSchema = Yup.object().shape({

  review:Yup.string()
    .max(50, 'Too Long!')
    .required('Requireds'),
    rating:Yup.date()
    .required("Requireds"),
    product:Yup.number()
      .required("Requireds")



});


const Reviews = () => {

  const dispatch = useDispatch()

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
      review:'',
      rating:'',
      user:''
    },
    onSubmit:values=> {

      handleReset()
    },
    validationSchema : SignSchema
  });


  return (
  <>

    <div className="coupon_container">

      <h1>Reviews</h1>


      

    <Form  onSubmit={handleSubmit} className="Form" >

        <Form.Group className="mb-3" >
          <Form.Control
                name="review"
                value={values.review}
                onChange={handleChange}
                 onBlur={handleBlur} 
                className='input'
                type="name"
                placeholder="Enter Your opinin" />
        </Form.Group>

        {
        touched.review && errors.review ?<p className='error'>{errors.review}</p>:null
        }


      <Form.Group className="mb-3" >

        <Form.Control
         type="rating"
         placeholder="rating"
         name="rating"
         value={values.rating}
         onChange={handleChange}
         onBlur={handleBlur}
         className='input'
          />

      </Form.Group>

      {
        touched.rating && errors.rating ?<p className='error'>{errors.rating}</p>:null
      }



            
      <Form.Group className="mb-3" >
              <Form.Control type="name"
              placeholder="Enter Discount"
              name="product"
              value={values.product}
              onChange={handleChange}
              onBlur={handleBlur}
              className='input'

                />
            </Form.Group>

      {
        touched.product && errors.product ?<p className='error'>{errors.product}</p>:null
      }
            <Form.Group className="mb-3" >
              <Form.Control type="name"
              placeholder="Enter Discount"
              name="user"
              value={values.user}
              onChange={handleChange}
              onBlur={handleBlur}
              className='input'

                />
            </Form.Group>

      {
        touched.user && errors.user ?<p className='error'>{errors.user}</p>:null
      }



      <Button className="Button" type="submit">Post</Button>
    </Form>

      <div className="Card_coupon">

        <h2>Review : </h2>
          <p>Rating : </p>
          <p>Product : </p>
          <p>User : </p>

      </div>  









    </div>


  </>
  )

};

export default Reviews
