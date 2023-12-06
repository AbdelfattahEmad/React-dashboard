import Spinner from 'react-bootstrap/Spinner';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./AddCategory.scss"
import { ToastContainer} from 'react-toastify';
import AddCategoryHook from '../../../../Redux/Hooks/CategoryHooks/AddCategoryHook';






const AddCategory = () => {


  const { img,name ,loading ,onImageChange ,OnChangeName ,HandelSubmit,ispress }=AddCategoryHook()


  return (
    
    <div className='AddCategory_Head'>
      <h2>Add Category</h2>

        <div className='inputs'>

          <div className='text-center'>
              <label for="upload-photo">

              <img src={img} height="150px"
              width="150px" alt='fzx'
                style={{cursor:"pointer" ,
                textAlign :"center" ,
                  borderRadius:"8px"}} />

              </label>
              <input type='file'
              name='photo'
              onChange={onImageChange}
              id='upload-photo'
              />

          </div>

          <input type='text' placeholder='Name' value={name} onChange={OnChangeName} />
          <button className='Btn_sub' onClick={HandelSubmit}>Submit</button>

          {
            ispress ? loading ? <Spinner animation="border" role="status"></Spinner>:
            <span style={{textAlign:"center", fontSize:"30px",padding:"5px",color: "#fff"}}>Done 
              <FontAwesomeIcon icon={faCheck} style={{color: "#3bf109",}} /> </span>:null

        }



        </div>

        <ToastContainer />
    </div>
  )
}

export default AddCategory