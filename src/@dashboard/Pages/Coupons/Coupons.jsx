import React from "react";
import "./Coupons.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { CreateCouponAction } from "../../../Redux/Actions/CouponActions";
import { useDispatch } from 'react-redux'
import toast  from 'react-hot-toast';





const SignSchema = Yup.object().shape({

  name:Yup.string()
    .max(50, 'Too Long!')
    .required('Requireds'),
    expire:Yup.date()
    .required("Requireds"),
      discount:Yup.number()
      .required("Requireds")



});


const Addcoupons = () => {

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
      name:'',
      expire:'',
      discount:''
    },
    onSubmit:couponValues=> {
      dispatch(CreateCouponAction(couponValues))
      handleReset()
      toast.success(' Added successfully');


    },
    validationSchema : SignSchema
  });


  return (
  <>

    <div className="coupon_container">

      <h1> Add Coupons</h1>


    <Form  onSubmit={handleSubmit} className="Form" >

        <Form.Group className="mb-3" >
          <Form.Control
                name="name"
                value={values.name}
                onChange={handleChange}
                 onBlur={handleBlur} 
                className='input'
                type="name"
                placeholder="Enter Name" />
        </Form.Group>

        {
        touched.name && errors.name ?<p className='error'>{errors.name}</p>:null
        }


      <Form.Group className="mb-3" >

        <Form.Control
         type="date"
         placeholder="Enter date"
         name="expire"
         value={values.expire}
         onChange={handleChange}
         onBlur={handleBlur}
         className='input'
          />

      </Form.Group>

      {
        touched.expire && errors.expire ?<p className='error'>{errors.expire}</p>:null
      }

            
      <Form.Group className="mb-3" >
              <Form.Control type="name"
              placeholder="Enter Discount"
              name="discount"
              value={values.discount}
              onChange={handleChange}
              onBlur={handleBlur}
              className='input'

                />
            </Form.Group>

      {
        touched.discount && errors.discount ?<p className='error'>{errors.discount}</p>:null
      }

      <Button className="Button" type="submit">Post</Button>

    </Form>









    </div>


  </>
  )

};

export default Addcoupons
