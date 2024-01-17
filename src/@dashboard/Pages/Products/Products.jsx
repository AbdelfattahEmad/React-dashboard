import React from 'react'
import "./Products.scss"
import Tabel from '../../Components/Tabel/Tabel'
import TitleView from '../../Components/TitleView/TitelView'
import GetProductHook from '../../../Redux/Hooks/ProductHooks/getProductHooks'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import DeleteProductHooks from '../../../Redux/Hooks/ProductHooks/DeleteProductHooks'





const Products = () => {

  const {ProductData,Loading }=GetProductHook()


  const {show ,handleClose ,handleShow ,setId ,handelDelete }= DeleteProductHooks()


  

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
      
      
      
            <div className='product_Container'>
          
      
            <div className='Tabel_Header'>
      
              <div className='Title'>
              <TitleView title="Product Page" btn="Add Product" pathText="AddProduct" />
              
              </div>
      
              
            
            <div className='Tabel_Body'>
                  <Tabel>
      
      
                    <Tabel.tabelHead>
                        <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>SubCategory</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Setting</th>
                        </tr>
                    </Tabel.tabelHead>
      
      
                    <Tabel.tabelebody>
      
        {
                Loading === false ? (
      
                  ProductData ? ProductData.map((item)=>{

                return(
                    <Tabel.tabelRow key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.imageCover}</td>
                      <td>{item.category}</td>
                      <td>{item.subcategory}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <Link className="Table_Btn" to={`EditProduct/${item._id}`}>Edit</Link>

                        <button className="Table_Btn" onClick={function(){handleShow();setId(item._id)}} >Delete</button>
                      </td>
                  </Tabel.tabelRow>
      
                    )
                }): <h1>No Products Finded</h1>
      
              ) :<Spinner animation="border" variant="primary" />
      
      
              
            }
      
      
                    </Tabel.tabelebody>
      
      
                  </Tabel>
      
              </div>
      
      
      
              </div>
              
              </div>
      
            </>
      
        )
      
        




  
}

export default Products