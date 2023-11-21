import React, { useEffect } from 'react'
import "./Category.scss"
import { useTranslation } from 'react-i18next'
import Table from 'react-bootstrap/Table';
import abdo from "../../../assets/Images/abdo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryAction } from '../../../Redux/Actions/CategoryAction';




const Category = () => {
  const {t}=useTranslation()

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getCategoryAction())

  },[])

  const CategoryData = useSelector((state)=>state.CategoryReducer.category)


  const Loading = useSelector((state)=>state.CategoryReducer.loading)


  console.log(CategoryData)




  return (

    <div className='Category_Container'>

    <div className='Tabel_Header'>

      <div className='Title'>
      <h1>Category</h1>
      <Link to="AddCategory" className='Btn'>Add Category</Link>
      </div>
     
    <div className='Tabel_Body'>

        <Table striped="columns" className='Tabel'>
        <thead>
          <tr>
            <th>id</th>
            <th>Category</th>
            <th>Dec</th>
            <th>quantity</th>
            <th>Price</th>
            <th>Setting</th>

          </tr>
        </thead>

        <tbody>


        <tr>
            <td>5</td>
            <td className='Image'><img src={abdo} alt="aboda" />ee</td>
            <td>Abdelfatah</td>
            <td>2 Dec 2023</td>
            <td><strong>125$</strong></td>
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




        <tr>
            <td>5</td>
            <td className='Image'><img src={abdo} alt="aboda" />ee</td>
            <td>Abdelfatah</td>
            <td>2 Dec 2023</td>
            <td><strong>125$</strong></td>
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


        <tr>
            <td>3</td>
            <td className='Image'><img src={abdo} alt="aboda" />ddd</td>
            <td>Abdelfatah</td>
            <td>2 Dec 2023</td>
            <td><strong>125$</strong></td>
            <td>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
    <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#27282b",}} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


            </td>
        </tr>


        <tr>
            <td>4</td>
            <td className='Image'><img src={abdo} alt="aboda" />ee</td>
            <td>Abdelfatah</td>
            <td>2 Dec 2023</td>
            <td><strong>125$</strong></td>
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


        <tr>
            <td>5</td>
            <td className='Image'><img src={abdo} alt="aboda" />ee</td>
            <td>Abdelfatah</td>
            <td>2 Dec 2023</td>
            <td><strong>125$</strong></td>
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



      </div>
      
      </div>



  )
}

export default Category