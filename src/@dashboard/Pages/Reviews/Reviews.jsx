import React, { useEffect } from "react";
import "./Reviews.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { AddReviewActions, DeleteReviewAction } from "../../../Redux/Actions/ReviewActions";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Spinner from 'react-bootstrap/Spinner';
import { getProductAction } from "../../../Redux/Actions/ProductAction";
import GetReviewHooks from "../../../Redux/Hooks/ReviewHooks/GetReviewHooks";
import Modal from 'react-bootstrap/Modal';







const SignSchema = Yup.object().shape({

  review:Yup.string().required('Requireds'),
  rating:Yup.string().required('Requireds'),
  product:Yup.string().required('Requireds'),
  user:Yup.string()
    .max(50, 'Too Long!')
    .required('Requireds')
});


const Reviews = () => {

  const {show,setShow ,handleClose ,handleShow ,setId ,handelDelete} = DeleteReviewAction()

  const {getData}=GetReviewHooks()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProductAction())
  },[])
  
  const ProductData = useSelector((state)=>state.ProductReducer.Products)
  const Loading = useSelector((state)=>state.ProductReducer.loading)



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
      product:'',
      user:''
    },
    onSubmit:values=> {
      dispatch(AddReviewActions(values))

      handleReset()
    },
    validationSchema : SignSchema
  });


  return (

  <>


            <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Delete operation!</Modal.Title>
        </Modal.Header>
        <Modal.Body>are sure of the deleting process ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelDelete}>
           Confirm 
          </Button>
        </Modal.Footer>
            </Modal>


    <div className="Review_container">

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





        <FloatingLabel controlId="floatingSelect"  >
        <Form.Select
                      name="product"
                      value={values.product}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='input'
                      
                >




        {

        Loading === false ? (

          ProductData ? ProductData.map((item)=>{
            return(

              <>
                <option key={item._id}>{item.title}</option>
              </> 
              
              )
          }):<td> No Proudct Finded</td>

          ):<Spinner animation="border" variant="primary" />

        }

        </Form.Select>  

            </FloatingLabel>


          {
            touched.product && errors.product ?<p className='error'>{errors.product}</p>:null
          }

                <Form.Group className="mb-3" >
                  <Form.Control type="name"
                  placeholder="Enter user"
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

      <div className="Card_Rreview">
{

        Loading === false ? (

          getData.data ? getData.data.map((item)=>{
            console.log(getData.data)
            return(

              <div className="review" key={item.review}>

                  <h2>{item.review}</h2>
                  <p>{item.rating}</p>
                  <p>{item.product} </p>
                  <p>{item.user}</p>

                  <div className="Btn_Review">

                    <Button className="Button" type="submit" onClick={setShow()}>Delete</Button>

                  </div>




              </div>
              
              )

          }):<td> No Reviews </td>

          ):<Spinner animation="border" variant="primary" />

}


        <div className="review">
        <h2>Review : </h2>
          <p>Rating : </p>
          <p>Product : </p>
          <p>User : </p>

          <div className="Btn_Review">

      <Button className="Button" type="submit" onClick={function(){handleShow();setId(item._id)}}>Delete</Button>

          </div>



        </div>






      </div>  









    </div>


  </>
  )

};

export default Reviews
