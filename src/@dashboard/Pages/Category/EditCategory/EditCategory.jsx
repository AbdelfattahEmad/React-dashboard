import React from 'react'
import "./EditCategory.scss"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import EditCatrgoryHooks from '../../../../Redux/Hooks/CategoryHooks/EditCatrgoryHooks';


const EditCategory = () => {


  const {editID , onChangeId,editName ,onChangeName , setId, handelEditSubmit} = EditCatrgoryHooks()





  return (
    <div className='Edit_Container'>

      <div className='Forms'>
        
        <h5>Edit Category</h5>

        <Form.Control value={editID} onChange={onChangeId} type="Text" placeholder="Id"  className="input" />

        <Form.Control value={editName} onChange={onChangeName} type="Text" placeholder="Category Name" className="input" />


        <Button className='BtN' onClick={handelEditSubmit}>Save Edit</Button>
        
        </div>

    </div>
  )
}

export default EditCategory