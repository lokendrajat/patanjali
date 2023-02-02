import React from 'react'
import {  BsUnlockFill } from "react-icons/bs";
import imageone from '../imagelogin/imagevarificationlogo.jpg';
import imagetwo from '../imagelogin/google.png';
import imagethree from '../imagelogin/facebook.png';
function Login() {
  return (
    <> 
     <div className='container-fluid'>
       <div className='row  p-5 login'>
           <div className='col-6 bg-white  login1' >
               <span className='fs-4 fw-bold'><BsUnlockFill/> Login</span>
               <p className='fs-5 mt-2'>Please login using your existing account</p>
               <div>
               <input className='logininput' placeholder='Enter your email/mobile no.'></input>
               <input className='logininput ms-5' placeholder='Enter your password..'></input>
               </div>
               <p className='mt-3 fs-5 text-secondary'>*Image Verification :</p>
               <img src={imageone} alt=''/>
               <div >
               <input className='input2 mt-2' placeholder='Varification Code'></input>
               </div>
               <div>
                  <button className='btn login-button ms-2'>LOGIN</button>
                  <button className='btn login-button ms-5'>FORGOT PASSWORD..?</button>
               </div>
               <div>
                 <p className='fs-5 mt-3'>or login with</p>
                 <div >
                 <img src={imagetwo} alt='' className=' loginin mb-4'/>
                 <img src={imagethree} alt='' className=' loginin mb-4' />
                 </div>
               </div>
           </div>
           <div className='col-6 bg-white login3'>
               <p className='text-black fs-4 mt-3'>Register Account</p>
               <p className='text-secondary mt-4'>By creating an account you will be able to shop faster, be up to date on an order's status.</p>
               <button className='btn login-button mt-3'>REGISTER</button>
           </div>

       </div>
          
    </div>
    </>
  )
}

export default Login
