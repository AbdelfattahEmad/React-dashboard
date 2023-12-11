import React from 'react'
import "./AddSubCategory.scss"
import AddSubCategoryHooks from '../../../../Redux/Hooks/SubCategory/AddSubCategoryHooks'
import { ToastContainer} from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';



const SubCategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  category: Yup.string()
    .required('Required'),
});




const AddSubCategory= () => {

 const {loading ,saveCategory,ispress , categories} =AddSubCategoryHooks()

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
      name: '',
      category: '',
      
    },
    onSubmit: values => {

      saveCategory(values)
      handleReset()
    },

    validationSchema : SubCategorySchema

  });




 
 

  return (

    <div className='AddSubCategory_Head'>
      <h2>Add SubCategory</h2>
      
      <div className='inputs'>


        <form onSubmit={handleSubmit}>
          <div className='form-Control'>
          <input type='text' name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}  placeholder='Name' />
          {
                touched.name && errors.name ?<p className='error'>{errors.name}</p>:null
          }

          </div>

          <div className='form-Control'>

          <Form.Select aria-label="Default select example"
            name="category" value={values.category} onChange={handleChange} onBlur={handleBlur} >
              <option selected="true" >Selected Category</option>


              {

                  categories && categories.map((item)=>{
                  return(
                    <option value={item._id} key={item._id}>{item.name}</option>
                  )
                })
              }
          </Form.Select>

          {
                touched.category && errors.category ?<p className='error'>{errors.category}</p>:null
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
      <ToastContainer />

    </div>
    
  )
}

export default AddSubCategory