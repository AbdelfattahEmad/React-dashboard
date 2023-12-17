import React, { useEffect, useState } from 'react'
import "./Addproducts.scss"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import AddProductHooks from '../../../../Redux/Hooks/ProductHooks/AddProductHook';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import empty from '../../../../assets/Images/empty.png';



const ProductSchema = Yup.object().shape({
  title: Yup.string(),
  description:Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
   category:Yup.string(),
    subCategory:Yup.string(),
    price:Yup.number(),
    quantity:Yup.number()
    .required('Required'),
});


const AddProducts = () => {


const{uploadImage,uploadImageCover,img,setImg ,imageCover,setImageCover,
  loading,saveproduct,ispress,categories,Subcategories}=AddProductHooks()

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
      title: '',
      description:'',
      category: '',
      subCategory : "" , 
      price :"",
      quantity :'',
      
    },
    onSubmit:formData=> {
      if(img && imageCover){
        const data ={
          ...formData , images:img ,imageCover:imageCover
        }
              saveproduct(data)
              handleReset()
              setImg(null)
              setImageCover(null)
      }
    },
    validationSchema : ProductSchema
  });




  return (


  
  
   
    <div className='AddProduct_Head'>
      
    <h2>Add Products</h2>

    <div className='inputs'>

      <form onSubmit={handleSubmit}>


              <div className='form-Control'>

                  <div  className='Photo_inputs'>
                      <input type='file'
                       className='input_img'
                       name='image'
                        onChange={uploadImage}
                      />




                  </div>

                  <div className='Photo_inputs'>
                      <input type='file'
                       className='input_img'
                         name='image'
                         id='upload-cover'
                         onChange={uploadImageCover}
                      />




                  </div>


              </div>







            <div className='form-Control'>

            <input className='input_add'  type='text' name="title" value={values.title} onChange={handleChange} onBlur={handleBlur}  placeholder='title' />
            {
                  touched.title && errors.title ?<p className='error'>{errors.title}</p>:null
            }

            </div>


            <div className='form-Control'>

            <input className='input_add'  type='text' name="description" value={values.description}
             onChange={handleChange} onBlur={handleBlur}  placeholder='description' />
            {
                  touched.description && errors.description ? <p className='error'>{errors.description}</p>:null
            }

            </div>



            <div className='form-Control'>

            <input className='input_add'  type='text' name="price" value={values.price}
             onChange={handleChange} onBlur={handleBlur}  placeholder='price' />
            {
                  touched.price && errors.price ? <p className='error'>{errors.price}</p>:null
            }

            </div>

            <div className='form-Control'>
              <input className='input_add'  type='text' name="quantity" value={values.quantity} onChange={handleChange} onBlur={handleBlur}  placeholder='quantity' />
              {
                    touched.quantity && errors.quantity ?<p className='error'>{errors.quantity}</p>:null
              }

            </div>


            <div className='form-Control'>
              
              <Form.Select aria-label="Default select example" 
              className='input_add'
                name="category" value={values.category} onChange={handleChange} onBlur={handleBlur} >
                  <option  >Selected Category</option>

                    {
                      categories && categories.map((item)=>{
                        return(<option value={item._id} key={item._id}>{item.name}</option>)
                      })
                    }


                </Form.Select>

                {
                      touched.category && errors.category ?<p className='error'>{errors.category}</p>:null
                }

            </div>


            <div className='form-Control'>

              <Form.Select aria-label="Default select example" 
                className='input_add'
                name="subCategory" value={values.subCategory} onChange={handleChange} onBlur={handleBlur} >
                  <option >Selected SubCategory</option>
                    {
                    Subcategories && Subcategories.map((item)=>{
                        return(
                          <option value={item._id} key={item._id}>{item.name}</option>
                        )
                      })
                    }
                </Form.Select>

            {
                  touched.subCategoryy && errors.subCategory ?<p className='error'>{errors.subCategory}</p>:null
            }

            </div>


            <button className='Btn_sub' type='submit'>Submit</button>

        </form>

        {
          ispress ? loading ? <Spinner animation="border" role="status"></Spinner>:
          <span style={{textAlign:"center", fontSize:"30px",padding:"5px",color: "#fff" }}>Done 
            <FontAwesomeIcon icon={faCheck} style={{color: "#3bf109",}} /> </span>:null
        }




    </div>

  </div>

  )
}

export default AddProducts