import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import {MdOutlineLocalShipping} from  "react-icons/md";
import {BsTelephoneInbound} from  "react-icons/bs";
function Charity() {
  return (
    <>
        <div className=''>
            <div className='charity '>
                <p className='text-center '>Prosperity for 100% Charity</p>
            </div>
            <div className='row charity2'>
                  <div className=' charity3 d-flex'>
                      <span className='charitylogo'><AiOutlineLike/></span>
                      <div>
                      <h3 className='charityhead'>Safe Payments</h3>
                      <p className='charityp'>Multiple Payment Option</p>
                      </div>
                  </div>
                  <div className=' charity3 d-flex'>
                  <span className='charitylogo'><MdOutlineLocalShipping/></span>
                      <div>
                      <h3 className='charityhead'>Free Shipping</h3>
                      <p className='charityp'>shop over Rs.1000/- and get <br/>
                        Shipping here</p>
                      </div>
                  </div>
                  <div className='charity3 d-flex'>
                  <span className='charitylogo'><BsTelephoneInbound/></span>
                      <div>
                      <h3 className='charityhead'>COD Service</h3>
                      <p className='charityp'>Shop over Rs.999/- and <br/>
                      get COD Free</p>
                      </div>
                  </div>
             </div>
        </div> 
    </>
  )
}

export default Charity
