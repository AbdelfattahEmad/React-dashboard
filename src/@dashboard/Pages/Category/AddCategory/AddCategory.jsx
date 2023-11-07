import React from 'react'
import "./AddCategory.scss"

const AddCategory = () => {
  return (
    <div className='AddCategory_Head'>
      <h2>Add Category</h2>

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

export default AddCategory