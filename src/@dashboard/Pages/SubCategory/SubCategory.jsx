import React from 'react'
import "./Subcategory.scss"
import { useTranslation } from 'react-i18next'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';





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




<Table striped="columns">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Administration number</th>
          <th>State</th>
          <th>Number of administrations</th>
          <th>procedures</th>
        </tr>
      </thead>


      <tbody>

      <tr>
          <td>{t("financial management")}</td>
          <td>2 march</td>
          <td> 1 </td>
          <td>
          <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
          </Form>
          </td>
          <td>2</td>


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
          <td>{t("financial management")}</td>
          <td>2 march</td>
          <td> 1 </td>
          <td>
          <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
          </Form>
          </td>
          <td>2</td>


          <td>
              
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="Edit">ُEdit</Dropdown.Item>
        <Dropdown.Item >Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </td>

        </tr>


        <tr>
          <td>{t("financial management")}</td>
          <td>2 march</td>
          <td> 1 </td>
          <td>
          <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
          </Form>
          </td>
          <td>2</td>


          <td>
              
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="Edit">ُEdit</Dropdown.Item>
        <Dropdown.Item >Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </td>

        </tr>


        <tr>
          <td>{t("financial management")}</td>
          <td>2 march</td>
          <td> 1 </td>
          <td>
          <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
          </Form>
          </td>
          <td>2</td>


          <td>
              
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="Edit">ُEdit</Dropdown.Item>
        <Dropdown.Item >Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </td>

        </tr>

        <tr>
          <td>{t("financial management")}</td>
          <td>2 march</td>
          <td> 1 </td>
          <td>
          <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
          </Form>
          </td>
          <td>2</td>


          <td>
              
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="Edit">ُEdit</Dropdown.Item>
        <Dropdown.Item >Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </td>

        </tr>

        <tr>
          <td>{t("financial management")}</td>
          <td>2 march</td>
          <td> 1 </td>
          <td>
          <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
          </Form>
          </td>
          <td>2</td>


          <td>
              
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="Edit">ُEdit</Dropdown.Item>
        <Dropdown.Item >Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </td>

        </tr>


        <tr>
          <td>{t("financial management")}</td>
          <td>2 march</td>
          <td> 1 </td>
          <td>
          <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
          </Form>
          </td>
          <td>2</td>


          <td>
              
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="Edit">ُEdit</Dropdown.Item>
        <Dropdown.Item >Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </td>

        </tr>


        <tr>
          <td>{t("financial management")}</td>
          <td>2 march</td>
          <td> 1 </td>
          <td>
          <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
          </Form>
          </td>
          <td>2</td>


          <td>
              
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#405189",}} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="Edit">ُEdit</Dropdown.Item>
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