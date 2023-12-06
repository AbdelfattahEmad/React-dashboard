import React from 'react'
import "./EditBrands.scss"

const EditBrands = () => {

  return (
    <div className='EditBrand_Head'>
        
    <h2>Edit Brand</h2>
    <div className='inputs'>
      <input type='text' placeholder='Id' />
      <input type='text' placeholder='Name' />
      <input type='text' placeholder='Image' />
      <input type='text' placeholder='Descreption' />
      <input type='number' placeholder='Quantity' />
      <input type='text' placeholder='Price' />
      <button className='Btn_sub'>Submit</button>
    </div>

  </div>
  

  )
}

export default EditBrands