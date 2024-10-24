import React from 'react'

const Item = () => {
  return (
    <div>
      <h3>Supplier Name</h3>
      <input type='text' placeholder='Enter Supplier Name'/>
      <h3>Company Name</h3>
      <input type='text'placeholder='Enter Company Name'/>
      <h3>Country</h3>
      <select>
        <ption value='usa'>USA</Option>
        <Option value='usa'>USA</Option>
        <Option value='usa'>USA</Option>
      </select>
      <h3>Date of submission</h3>
      <input type='date'placeholder='Select Date'/>
    </div>
  )
}

export default Item