import React from 'react'
import './contact.css';
function Contact() {
  return (
    <div className='contact'>
      <div className='hh'>
        <span>Contact me on these profile </span>
         </div>
      <div className='mail'>
        <h2>Mail me :- priyanshu.bhadauriya.rs@gmail.com</h2>
      </div>
      <div className='LinkedIn'>
        <a href='https://www.linkedin.com/in/priyanshu-bhadauriya-74a2a31a1'><button>Contact me on LinkedIn</button></a>
      </div>
      <div className='github'>
        <a href='https://github.com/PriyanshuBhadauriya?tab=repositories'><button className='button-92'>See my Github Account</button></a>
      </div>

    </div>
  )
}

export default Contact