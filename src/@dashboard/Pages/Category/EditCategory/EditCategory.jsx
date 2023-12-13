import React, { useState } from 'react'
import "./EditCategory.scss"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import EditCatrgoryHooks from '../../../../Redux/Hooks/CategoryHooks/EditCatrgoryHooks';
import { ToastContainer} from 'react-toastify';



const EditCategory = () => {

  



  const {name, img ,onChangeName, onImageChange,handelEditSubmit ,ispress} =EditCatrgoryHooks()

  return (
    <div className='Edit_Container'>

      <div className='Forms'>
        
        <h5>Edit Category</h5>

        <div className='inputs'>

        <div className='text-center'>

            <label for="upload-photo">

            <img src={img} height="150px"
            width="150px" alt='fzx'
              style={{cursor:"pointer" ,
              textAlign :"center" ,
                borderRadius:"8px"}} />

            </label>
            <input type='file'
            name='photo'
            onChange={onImageChange}
            id='upload-photo'
            />

        </div>

        <Form.Control value={name} onChange={onChangeName} type="Text" placeholder="Category Name" className="input" /> 

        <Button className='BtN' onClick={handelEditSubmit}>Save Edit</Button>



        {
         ispress ? loading ? <Spinner animation="border" role="status"></Spinner>:
          <span style={{textAlign:"center", fontSize:"30px",padding:"5px",color: "#fff"}}>Done 
            <FontAwesomeIcon icon={faCheck} style={{color: "#3bf109",}} /> </span>:null

        }
            <ToastContainer />

                </div>

        </div>

    </div>
  )
}

export default EditCategory