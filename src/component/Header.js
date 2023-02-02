import React from 'react'
import {AiOutlineMail} from "react-icons/ai";
import { AiOutlineFacebook ,AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";

function Header() {
  return (
    <>
        <div className='row container-fluid header' >
             <div className='col-6'>
                <ul className='header-1'>
                  
                    <li className=' nav-items'> <li><AiOutlineMail/></li> &nbsp; customercare@orderme.co.in</li>
                    <li className=' nav-item  bg-warning'>Caution Notice</li>
                </ul>
             </div>
             <div className='col-6'>
                <ul className='header-1'>
                     <li className='nav-item fs-4 text-primary '><AiOutlineFacebook /></li>
                    <li className= ' nav-item  fs-4 text-info'><AiOutlineTwitter/></li>
                    <li className='nav-item fs-4 text-danger'><AiOutlineInstagram/></li>
                    <li className=' nav-item  fs-4 text-secondary'><AiOutlineYoutube/></li>
                    <li  className='loginh  nav-item'>
                       Login</li>
                    <li  className='nav-item '>Ragister</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header
