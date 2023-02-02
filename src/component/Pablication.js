import React from 'react'
import one from '../Image/public1.jpg';
import two from '../Image/public2.jpg';

function Pablication() {
  return (
        <>
      <div className='public'>
         <h2 className='ps-3 fs-1 fw-lighter'>Patanjali Publication</h2>
         <div className='row public2'>
            <div className='col-3'>
              <img src={one} alt="" />
            </div>
            <div className='col-6 public3'>
              <h6 className='fw-lighter'>Books</h6>
              <p>We have a very good collection of books on Yoga and Pranayama written by Swami Ramdev and <br/>
               eminent Yogacharya of Patanjali. These books are avalable on various topics like yoga,<br/>
                pranayam, health, various Aasan and breathing techniques. These books can help you to learn <br/>
                 the techniques of yoga.</p>
              <h6 className='fw-lighter'>Media</h6>
              <p>We have wide range of CD's and DVD's based on the various topics of yoga, Pranayama, <br/>
               Ayurveda, bhajans and education. One can easily learn yoga by watching the yoga cd's. Our <br/>
                Ayurveda CD's provide extensive knowledge of the subject and importance of medicinal values  <br/>
                of various herbs and shrubs. Our devotional music cd's and dvd's are melodious to leave you <br/>
                immersed in bhakti of God</p>
           </div>
           <div className='col-3'>
           <img src={two} alt="" />
            </div>
         </div>
      </div>
        </>
  )
}

export default Pablication
