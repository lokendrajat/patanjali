import React from 'react'
import Nutracard from './Nutracard';

function Nutraceuticals() {
    let box = document.querySelector('.product-container');
    const btnpressprev = () => {
       var width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
         
    }
    const btnpressnext = () => {
        var width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        
    }
  return (
    <>
        <div>
      <ul className='medicinetop '>
        <li className='p-2 mt-3'>Nutraceuticals</li>
        <li  className='p-3'><button className=' bclick'>click to view</button></li>
      </ul>

       <div className='product-caraousel'>
        <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
        <button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>

          <div className='product-container'>
             <Nutracard/>
          </div>
       </div>
</div>
    </>
  )
}

export default Nutraceuticals
