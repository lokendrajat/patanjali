import React from 'react'
import logo from '../Image/logo-big.png';
// import {  Link } from "react-router-dom";
import { AiTwotoneHome, AiOutlineShoppingCart} from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

function Navbar() {
  return (
   <>
     <div className='container-fluid sticky-top'>
      <div className=' sticky-top bg-white'>
        <div className='row'>
             <div className='col-3  text-center'>
              <img className='logo' src={logo}/>
             </div>
             <div className='col-6 mt-2'>
             <input className='serch' type="text" placeholder="serach for..." />
             </div>
             <div className='col-2  text-center mt-3'>
                <h6 className='fs-4'>0 item(s)-Rs. 0 <span className='text-success'><AiOutlineShoppingCart/></span> </h6>
             </div>
             </div>
              


             <div className='container-fluid'>
              <nav className=" navbar-expand-lg">
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"><AiTwotoneHome /></span>
  </button>
  <div className=" " id="navbarNavDropdown">
    <ul className=" navmain">
      <li className="nav-item bg-warning">
       <AiTwotoneHome  />
      </li>
      <li className="nav-item  ">
       <div class="dropdown">
            All Categories ◂  
         <div class="dropdown-contents ">
        <a href="#">Natural Health Care</a>
        <a href="#">Natural Food products</a>
        <a href="#">Ayurvedic Medicine</a>
        <a href="#">Harbal Home care</a>
        <a href="#">Natural Personal Care</a>
        <a href="#">Patanjali Publication</a>
        <a href="#">Samridhi Card</a>
        <a href="#">Nutraceuticals</a>
        <a href="#">PARIDHAN</a>
        <a href="#">Copperware</a>
        </div>
      </div>
      </li>
      <li className="nav-item">
       SSC
      </li>
      <li className="nav-item">
       Credit Card
      </li>
      <li className="nav-item">
       Best Cellers
      </li>
      <li className="nav-item">
       All products
      </li>
     
      <li className="nav-item  bg-warning">
      <div class="dropdown">
             Knowledge Base ◂
         <div class="dropdown-content ">
        <a href="#">Health Care</a>
        <a href="#">Skin Care</a>
        <a href="#">Ayurveda</a>
        <a href="#">Health Tips</a>
        <a href="#">Food</a>
        <a href="#">Home Care</a>
        <a href="#">Lifestyle</a>
        </div>
      </div>
      </li>
      <li className="nav-item">
       Offers/Discount
      </li>
      <li className="nav-item bg-warning">
       < ImLocation2 />Store Locator
      </li>
      {/* <ul className="nav-item dropdown">
        <li className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </li>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </ul> */}
    </ul>
  </div>
</nav>
</div>
</div>
</div>
   </>
  )
}

export default Navbar
