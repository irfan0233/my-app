import React from 'react'

const Item = () => {
  return (
    <div>
      <h3>Item Name</h3>
      <input type='text' placeholder='Enter Item Name'/>
      <h3>Quantity</h3>
      <input type='text'placeholder='Enter Quantity'/>
      <h3>Unit Price</h3>
      <input type='text' placeholder='Enter unit price'/>
      <h3>Date of submission</h3>
      <input type='date'placeholder='Select Date'/>
    </div>
  )
}

export default Item
