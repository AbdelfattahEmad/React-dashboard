import React from 'react';
import './Subcategory.scss';
import { useTranslation } from 'react-i18next';
import TitleView from '../../Components/TitleView/TitelView';
import Tabel from '../../Components/Tabel/Tabel';
import abdo from '../../../assets/Images/abdo.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const fakeData = [
  {
    id: 1,
    img: '',
    Descreption: 'dsdsdsdsdsdsdsdsd',
    quantity: 'dsdsdsdsdsd',
    Price: '$121',
    SubCategory: '2wwqwq',
  },
];

const SubCategory = () => {
  const { t } = useTranslation();

  return (
    <div className="Sub_Container">
      <div className="Tabel_Header">
        <TitleView
          title="SubCategory"
          btn="Add SubCategory"
          pathText="AddSubCategory"
        />

        <Tabel>
          <Tabel.tabelHead>
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

          <Tabel.tabelebody>
            {fakeData &&
              fakeData.map((item) => {
                return (
                  <Tabel.tabelRow key={item?.id}>
                    <td>{item?.id}</td>
                    <td>{item?.img}</td>
                    <td>{item?.Descreption}</td>
                    <td>{item?.quantity}</td>
                    <td>{item?.price}</td>
                    <td>{item?.SubCategory}</td>
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
                          <Dropdown.Item href="DeleteCategory">
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </Tabel.tabelRow>
                );
              })}
          </Tabel.tabelebody>
        </Tabel>
      </div>
    </div>
  );
};

export default SubCategory;
