import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
      <h1 style={{display:"inline",float:'left',marginLeft:"20px"}}>Inventory Management System</h1>
      <h1 style={{float:"right"}}>Home</h1><br/>
      <center style={{marginTop:"70px"}}>
      <input type='checkbox'/>
      <label style={{margin:"10px"}}>item</label>
      <input type='checkbox'/>
      <label >supplier</label>
      </center>
    </div>
    
    </>
  )
}

export default Navbar
