import "./EditSubCategory.scss"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { ToastContainer} from 'react-toastify';
import EditSubCatrgoryHooks from '../../../../Redux/Hooks/SubCategory/EditSubCategoryHooks';



const EditSubCategory = () => {

  

  const {name,onChangeName,category, onChangeCategory,handelEditSubmit ,ispress} =EditSubCatrgoryHooks()

  return (
    <div className='Edit_Container'>

      <div className='Forms'>
        
        <h5>Edit Category</h5>

        <div className='inputs'>


      <form>

          <Form.Control value={name} onChange={onChangeName} type="Text" placeholder="Name" className="input" /> 

          <Form.Control value={category} onChange={onChangeCategory} type="Text" placeholder="Category Name" className="input" /> 

          <Button className='BtN' onClick={handelEditSubmit}>Save Edit</Button>

        </form>



        {
         ispress ? loading ? <Spinner animation="border" role="status"></Spinner>:
          <span style={{textAlign:"center", fontSize:"30px",padding:"5px",color: "#fff"}}>Done 
            <FontAwesomeIcon icon={faCheck} style={{color: "#3bf109",}} /> </span>:null

        }
            <ToastContainer />

        </div>

        </div>

    </div>
  )
}

export default EditSubCategory