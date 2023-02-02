import React, { useState } from 'react'
import slideone from '../Image/slice-1.jpg';
import slicetwo from '../Image/slide-2.jpg';
import slicethree from '../Image/slide-3.jpg';
import nutrela from '../Image/nutrela.jpg';
import cardone from '../Image/Cardone.jpg';
import cardtwo from '../Image/Cardtwo.jpg';
import cardthree from '../Image/Cardthree.jpg';
import cardfour from '../Image/Cardfour.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
import Medicine from './Medicine';
import Scrollbtn from './Scrollbtn';
import Pablication from './Pablication';
import Charity from './Charity';
import Nutraceuticals from './Nutraceuticals';
import Header from './Header';
import Login from './Login';
function Home() {
  const [slider, setSlider] = useState(0)
  setInterval(() => {
    if(slider == 0){
      setSlider(1)
    }else if (slider == 1){
      setSlider(2)
    }else if(slider ==2){
      setSlider(0)
    }
  }, 5000);
  return (
     <>
     <Header/>
      <Navbar />
         <div className='container-fluid position-sticky '>
       <div className='row m-0'>
     <div className='col-9 m-0'>
     <div  className="carousel slide">
  <div className="carousel-inner ">
    {slider == 0?
    <div className="carousel-item active">
      <img src={slideone} className="d-block  w-100 h-25 " alt=""/>
    </div>:slider == 1?
    <div className="carousel-item active">
      <img src={slicetwo} className="d-block w-100   h-25" alt=""/>
    </div>:
    <div className="carousel-item active">
      <img src={slicethree} className="d-block w-100 h-auto" alt=""/>
    </div>}
  </div>
</div>
     </div>

     <div className='col-3 '>
     <img className="d-block w-100  " src={nutrela} alt=""/>
     </div>
  </div>
  <div className="card-group ">
  <div className="card m-1">
    <img className="card-img-top" src={cardone} alt="Card image cap"/>
    
  </div>
  <div className="card m-1">
    <img className="card-img-top" src={cardtwo} alt="Card image cap"/>
    
  </div>
  <div className="card m-1">
    <img className="card-img-top" src={cardthree} alt="Card image cap"/>
    
  </div>
  <div className="card m-1">
    <img className="card-img-top" src={cardfour} alt="Card image cap"/>
    
  </div>
</div>
<Medicine />
<Nutraceuticals/>
<Pablication/>
<Charity/>
<Footer/>
<Login/>
<Scrollbtn/>

</div> 
     </>
  )
}

export default Home
