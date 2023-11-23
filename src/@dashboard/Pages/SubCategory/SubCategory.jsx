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
import CategoryHook from "../../../Redux/Hooks/CategoryHooks"



const SubCategory = () => {

  const {CategoryData ,Loading }= CategoryHook()

  const { t } = useTranslation();

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
              <th>img</th>
              <th>Descreption</th>
              <th>quantity</th>
              <th>Price</th>
              <th>SubCategory</th>
              <th>Setting</th>
              </tr>
          </Tabel.tabelHead>
        {

        Loading === false ? (
          CategoryData ? CategoryData.map((item)=>{
            return(
              <Tabel.tabelebody>
                <Tabel.tabelRow  key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.image}</td>
                  <td>{item.slug}</td>
                  <td>{item.price}</td>
                  <td>{item.SubCategory}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FontAwesomeIcon
                          icon={faEllipsisVertical}
                          style={{ color: '#27282b' }}
                        />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Link to={'Edit/' + item?.id}>Edit</Link>
                        <Dropdown.Item href="DeleteSubCategory">
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </Tabel.tabelRow>
              </Tabel.tabelebody>
              )
          }):<h1> No Categores</h1>

          ):<Spinner animation="border" variant="primary" />

        }
        </Tabel>
        </div>
    </div>
  );
};

export default SubCategory;
