import React from 'react';
import './Subcategory.scss';
import { useTranslation } from 'react-i18next';
import TitleView from '../../Components/TitleView/TitelView';
import Tabel from '../../Components/Tabel/Tabel';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import GetSubcategoryHooks from '../../../Redux/Hooks/SubCategory/SubcategoryHooks';



const SubCategory = () => {

  const { t } = useTranslation();


  const { GetSubCategory , Loading }= GetSubcategoryHooks()


  return (
    <div className="Sub_Container">

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
