import "./Category.scss"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import Tabel from '../../Components/Tabel/Tabel';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GetCategoryHook from "../../../Redux/Hooks/CategoryHooks/GetCategoryHooks";
import DeleteCategoryHooks from "../../../Redux/Hooks/CategoryHooks/DeleteCategoryHooks";



const Category = () => {


   const {CategoryData ,Loading}= GetCategoryHook()

  const {show,setShow ,handleClose ,handleShow ,setId ,handelDelete }= DeleteCategoryHooks()


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



      <div className='Category_Container'>


      <div className='Tabel_Header'>

        <div className='Title'>
        <h1>Category</h1>
        
        <Link to="AddCategory" className='Btn'>Add Category</Link>

        </div>

        
      
      <div className='Tabel_Body'>
            <Tabel>


              <Tabel.tabelHead>
                  <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>img</th>
                  <th>SubCategory</th>
                  <th>Setting</th>
                  </tr>
              </Tabel.tabelHead>


              <Tabel.tabelebody>

  {
          Loading === false ? (

          CategoryData ? CategoryData.map((item)=>{

            return(

              <Tabel.tabelRow key={item._id}>

                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.image}</td>
                <td>{item.createdAt}</td>

              <td>
              <Link className="Table_Btn" to={`EditCategory/${item._id}`} >Edit</Link>

              <button className="Table_Btn" onClick={function(){handleShow();setId(item._id)}} >Delete</button>

              </td>
            </Tabel.tabelRow>

              )
          }): <h1> No Categores</h1>

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

export default Category