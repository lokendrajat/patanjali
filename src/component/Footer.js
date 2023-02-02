import React from 'react'
import { AiOutlineFacebook ,AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  return (
    <>
     <div className='footer bg-dark bg-gradient text-white'>
           <div className='row'>
                   <div className='col-6 p-4 mt-2'>
                   <ul className='ficon'>
                    <li className='ps-4 fs-1 text-white'><AiOutlineFacebook /></li>
                    <li className='ps-4 fs-1 text-white'><AiOutlineTwitter/></li>
                    <li className='ps-4 fs-1 text-white'><AiOutlineInstagram/></li>
                    <li className='ps-4 fs-1 text-white'><AiOutlineYoutube/></li>
                   </ul>
                   </div>
                   <div className='col-6'>
                     <div className="input-group p-5 ">
                       
                        <input type="text" className="form-control" placeholder="Enter your email...." />
                        <label className="input-group-text  sign"  >sign in</label>
                     </div>
                  </div>
           </div>


           <div className='row p-4'>
            <div className='col-4'>
               <h3 className='pb-2'>Information</h3>
               <ul className='foter-li'>
               <li>ABOUT US</li>
               <li>GENERAL TERMS & CONDITIONS</li>
               <li>SHIPPING POLICY</li>
               <li>CANCELLATION POLICY</li>
               <li>RETURN/REFUND POLICY</li>
               <li>GRIEVANCE REDRESSAL POLICY</li>
               <li>PRIVACY POLICY</li>
               <li>FAQ</li>
               <li>MEDIA</li>
               <li>SITE MAP</li>
               <li>CAUTION NOTICE</li>
               </ul>
            </div>
            <div className='col-4'>
               <h3 className='pb-2'>Categories</h3>
               <ul className='foter-li'>
                <li>NATURAL HEALTH CARE</li>
                <li>NATURAL FOOD PRODUCTS</li>
                <li>AYURVEDIC MEDICINE</li>
                <li>HERBAL HOME CARE</li>
                <li>NATURAL PERSONAL CARE</li>
                <li>PATANJALI PUBLICATION</li>
                <li>SAMRIDHI CARD</li>
                <li>NUTRACEUTICALS</li>
                <li>PARIDHAN</li>
                <li>COPPERWARE</li>
                <li>DAIRY & FROZEN ITEMS</li>
               </ul>
           </div>
           <div className='col-4'>
               <h3 className='pb-2'>Get In Touch</h3>
               <ul className='footer-li2'>
                <li>Email: customercare@orderme.co.in</li>
                <li>Patanjali Ayurved Limited,</li>
                <li>Haridwar, Uttarakhand - 249401</li>
                <li>Helpline number – 1860-1800-180 & 01334-610111 (Monday to Saturday 6 am to 10 pm)</li>
               
                
               </ul>
           </div>
         </div>
         <div className='flast p-4 '>
            <p  className='text-center mb-4'>Copyright © 2023 Patanjali Ayurved</p>
         </div>
     </div>
    </>
  )
}

export default Footer
