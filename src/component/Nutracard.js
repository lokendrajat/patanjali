import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { NutraItems } from './nutraitem';
const Nutracard = () => {
  return (
    <>


{
    NutraItems.map((item)=>
   
    <div className="p-1 set-cardgroup">
    <div className="set-card ">
    <img src={item.image}  alt="imageone" className='set-image'/>
      <div className="card-body">
        <h5 className="card-title text-warning fs-4">{item.title}</h5>
        <div className='d-flex gap-5 pb-1 '>
          <p className='text-start  '>{item.weight}</p>
          <p className='text-end fw-bold'>{item.price}</p>
          <span className='ps-1 fs-3 text-end text-warning'><AiOutlineShoppingCart/></span>

        </div>
      </div>
    </div>
    </div>
    
    )
  }

</>
  )
}

export default Nutracard

