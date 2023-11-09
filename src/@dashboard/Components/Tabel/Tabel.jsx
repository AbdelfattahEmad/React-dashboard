import React from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import "./Tabel.scss"
import SubCategory from '../../Pages/SubCategory/SubCategory';




const Tabel = ({id ,img,Descreption ,quantity ,Price,SubCat }) => {
  return (

    <div className='Tabel_Container'>
      
    <Table striped="columns" className='Tabel'>

    <thead>

      <tr>
        <th>id</th>
        <th>img</th>
        <th>Descreption</th>
        <th>quantity</th>
        <th>Price</th>
        <th>SubCategory</th>
        <th>Setting</th>

      </tr>

    </thead>

    <tbody>


    <tr>
        <td>{id}</td>
        <td> {img}</td>
        <td>{Descreption}</td>
        <td>{quantity}</td>
        <td>{Price}</td>
        <td>{SubCat}</td>


        <td>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#27282b",}} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="EditCategory">Edit</Dropdown.Item>
              <Dropdown.Item href="DeleteCategory">Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


        </td>



    </tr>



    </tbody>

    </Table>
    </div>

  )
}

export default Tabel