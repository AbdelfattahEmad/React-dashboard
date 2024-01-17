import React from 'react'
import "./EditProducts.scss"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { ToastContainer} from 'react-toastify';
import EditProductHooks from '../../../../Redux/Hooks/ProductHooks/EditProductHook';


const EditProducts = () => {

  const { loading,name,price,quantity,onChangeName, onChangePrice,onChangeQuantity ,handelEditSubmit ,ispress} =EditProductHooks()

  return (

    <div className='Edit_Container'>

      <div className='Forms'>
        
        <h5>Edit Product</h5>

        <div className='inputs'>

        <Form.Control value={name} onChange={onChangeName} type="Text" placeholder="product Name" className="input" /> 
        <Form.Control value={price} onChange={onChangePrice} type="Text" placeholder="price" className="input" /> 
        <Form.Control value={quantity} onChange={onChangeQuantity} type="Text" placeholder="quantity" className="input" /> 


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

export default EditProducts