import React from 'react'
import "./GetCoupons.scss"
import Tabel from '../../../Components/Tabel/Tabel'
import TitleView from '../../../Components/TitleView/TitelView'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import DeleteCouponHooks from '../../../../Redux/Hooks/CouponHooks/DeleteCouponHook'
import GetCouponHook from '../../../../Redux/Hooks/CouponHooks/GetCouponHooks'





const GetCoupons = () => {

  const {CouponList,Loading}=GetCouponHook()


  const {show ,handleClose ,handleShow ,setId ,handelDelete }= DeleteCouponHooks()


  

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
            <div className='Coupon_Container'>
              <div className='Tabel_Header'>
      
                <div className='Title'>
                  <TitleView title="Coupon Page" btn="Add Coupon" pathText="AddCoupon" />
                </div>

                <div className='Tabel_Body'>
                  <Tabel>
      
                    <Tabel.tabelHead>
                        <tr>
                        <th>Expire</th>
                        <th>name</th>
                        <th>Discount</th>
                        <th>Setting</th>
                        </tr>
                    </Tabel.tabelHead>
      
      
                    <Tabel.tabelebody>
      
        {
                Loading === false ? (
      
                  CouponList && CouponList.map((item)=>{

                return(   

                    <Tabel.tabelRow key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.expire}</td>
                      <td>{item.discount}</td>
                      <td>
                        <button className="Table_Btn" onClick={function(){handleShow();setId(item._id)}} >Delete</button>
                      </td>
                  </Tabel.tabelRow>
      
                    )
                })
      
              ) : <tr><td><Spinner animation="border" variant="primary" /></td></tr> 

            }
                    </Tabel.tabelebody>
      
      
                  </Tabel>
                </div>

              </div>
            </div>
      
            </>
      
        )
      
        




  
}

export default GetCoupons