import React from 'react'
import './inputbox.css'
const InputBox = () => {
  return (
    <div className='input-box'>
        <label>Name</label>
         <input type='text'/>
         <label>Class</label>
         <input type='text'/>
         <label>Email</label>
         <input type='text'/>
         <button className='btn'>Submit</button>
    </div>
  )
}

export default InputBox