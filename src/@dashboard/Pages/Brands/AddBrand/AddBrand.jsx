import React from 'react'
import "./AddBrand.scss"
import AddBrandHook from '../../../../Redux/Hooks/BrandHooks/AddBrandHooks'
import { ToastContainer} from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



const AddBrand = () => {

  const { img,name ,loading ,onImageChange ,OnChangeName ,HandelSubmit,ispress }=AddBrandHook()



  return (

    <div className='AddBrand_Head'>
      <h2>Add Brand</h2>
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

        <input type='text' value={name} onChange={OnChangeName}  placeholder='Name' />
        <button className='Btn_sub' onClick={HandelSubmit}>Submit</button>



        {
          ispress ? loading ? <Spinner animation="border" role="status"></Spinner>:
          <span style={{textAlign:"center", fontSize:"30px",padding:"5px",color: "#fff" }}>Done 
            <FontAwesomeIcon icon={faCheck} style={{color: "#3bf109",}} /> </span>:null
        }

      </div>
      <ToastContainer />

    </div>
    
  )
}

export default AddBrand