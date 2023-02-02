import React from 'react'
import cardone from '../Image/Cardone.jpg';
import cardtwo from '../Image/Cardtwo.jpg';
import cardthree from '../Image/Cardthree.jpg';
import Mycard from './Mycard';
function Medicine() {
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
        <li className='p-2 mt-3'>Ayurvedic Medicine</li>
        <li  className='p-3'><button className=' bclick'>click to view</button></li>
      </ul>

       <div className='product-caraousel'>
        <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
        <button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>

          <div className='product-container'>
             <Mycard/>
          </div>
       </div>
</div>
  
   </>
  )
}

export default Medicine
