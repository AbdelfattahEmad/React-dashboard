import React from 'react';
import './Subcategory.scss';
import { useTranslation } from 'react-i18next';
import TitleView from '../../Components/TitleView/TitelView';
import Tabel from '../../Components/Tabel/Tabel';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import GetSubcategoryHooks from '../../../Redux/Hooks/SubCategory/SubcategoryHooks';
import DeleteSubCategoryHooks from '../../../Redux/Hooks/SubCategory/deleteSubCategoryHook';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';





const SubCategory = () => {

  const { t } = useTranslation();


  const { GetSubCategory , Loading }= GetSubcategoryHooks()

  const {show,setShow ,handleClose ,handleShow ,setId ,handelDelete}=DeleteSubCategoryHooks() 


  return (
    <div className="Sub_Container">


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



        <div className="Tabel_Header">
          <TitleView
            title="SubCategory"
            btn="Add SubCategory"
            pathText="AddSubCategory"
          />
        <Tabel >

          <Tabel.tabelHead >
              <tr>
              <th>id</th>
              <th>Name</th>
              <th>img</th>
              <th>Descreption</th>
              <th>Setting</th>
              </tr>
          </Tabel.tabelHead>
          <Tabel.tabelebody>


        {

        Loading === false ? (

          GetSubCategory ? GetSubCategory.map((item)=>{
            return(
                <Tabel.tabelRow  key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.slug}</td>
                  <td>
                  <Link className="Table_Btn" to={`EditSubCategory/${item._id}`} >Edit</Link>

                  <button className="Table_Btn" onClick={function(){handleShow();setId(item._id)}} >Delete</button>

                  </td>
                </Tabel.tabelRow>
              )
          }):<td> No  SubCategores</td>

          ):<Spinner animation="border" variant="primary" />

        }
        </Tabel.tabelebody>
        </Tabel>
        </div>
        
    </div>
  );
};

export default SubCategory;
