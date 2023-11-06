import React from 'react'
import "./Subcategory.scss"
import { useTranslation } from 'react-i18next'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import abdo from "../../../assets/Images/abdo.jpg"
import aboda from "../../../assets/Images/aboda.jpg"

const SubCategory = () => {

  const {t}=useTranslation()

  return (
    <div className='sub_Container'> 

    <div className='Sub_Title'>

      <h4>{t("sections")}</h4>

      <Link to="Add" className="Link_Add"  >

          {t("Add Section")}

      </Link>
      

    </div>

    <Table striped="columns" className='Tabel'>
          <thead>
            <tr>
              <th>id</th>
              <th>Img</th>
              <th>Name</th>
              <th>Price</th>
              <th>Descreption</th>
              <th>Quantaty</th>
              <th>:</th>
            </tr>
          </thead>

          <tbody className='Body'>

          <tr>
              <td>1</td>
              <td className='Image'><img src={abdo} alt="aboda" /></td>
              <td>Abdelfatah</td>
              <td>75 $</td>
              <td>Lorem ipsum dolor,  Quos itaque nemo illo asperiores et!</td>
              <td>5</td>
              <td>          
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="Edit" to="Edit">ُEdit</Dropdown.Item>
                    <Dropdown.Item >Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>



          </tr>

          <tr>
              <td>2</td>
              <td className='Image'><img src={aboda} alt="aboda"/></td>
              <td>Mohamed</td>
              <td>75 $</td>
              <td>Lorem ipsum dolor,  Quos itaque nemo illo asperiores et!</td>
              <td>5</td>
              <td>          
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="Edit" to="Edit">ُEdit</Dropdown.Item>
                    <Dropdown.Item >Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>



          </tr>



          <tr>
              <td>3</td>
              <td className='Image'><img src={abdo} alt="aboda" /></td>
              <td>Abdo</td>
              <td>72 $</td>
              <td>Lorem ipsum dolor,  Quos itaque nemo illo asperiores et!</td>
              <td>7</td>
              <td>          
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="Edit" to="Edit">ُEdit</Dropdown.Item>
                    <Dropdown.Item >Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>



          </tr>


          <tr>
              <td>1</td>
              <td className='Image'><img src={abdo} alt="aboda" /></td>
              <td>Abdelfatah</td>
              <td>75 $</td>
              <td>Lorem ipsum dolor,  Quos itaque nemo illo asperiores et!</td>
              <td>5</td>
              <td>          
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="Edit" to="Edit">ُEdit</Dropdown.Item>
                    <Dropdown.Item >Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>



          </tr>


          <tr>
              <td>1</td>
              <td className='Image'><img src={abdo} alt="aboda" /></td>
              <td>Abdelfatah</td>
              <td>75 $</td>
              <td>Lorem ipsum dolor,  Quos itaque nemo illo asperiores et!</td>
              <td>5</td>
              <td>          
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="Edit" to="Edit">ُEdit</Dropdown.Item>
                    <Dropdown.Item >Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>



          </tr>


          <tr>
              <td>1</td>
              <td className='Image'><img src={abdo} alt="aboda" /></td>
              <td>Abdelfatah</td>
              <td>75 $</td>
              <td>Lorem ipsum dolor,  Quos itaque nemo illo asperiores et!</td>
              <td>5</td>
              <td>          
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="Edit" to="Edit">ُEdit</Dropdown.Item>
                    <Dropdown.Item >Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>



          </tr>



          </tbody>
    </Table>


    </div>



  )
}

export default SubCategory