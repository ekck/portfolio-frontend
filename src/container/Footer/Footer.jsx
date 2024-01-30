import React, { useState, useEffect } from 'react'
import './Footer.scss'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Footer.scss'
import { images } from '../../constants'

const Footer = () => {
const [formData, setFormData] = useState({name: '', email:'', message: ''})



const [loading, setloading] = useState(false)
const [isFormSubmitted, setisFormSubmitted] = useState(false)

const { name, email, message } = formData;
const handleChangeInput = (e) => {
  const { name, value } = e.target; 

  setFormData({ ...formData,[name]: value})
}
const handleSubmit = () => {
  setloading(true)
}

const contact = {
  _type: 'contact',
  name: name,
  email: email,
  message: message,
}

client.create(contact).then(() => {
  setloading(false);
  setisFormSubmitted(false);

})





  return (
    <>
    <h2 className="head-text">
      Get some tea and have a chat with me 
    </h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt='email' />
        <a href="mailto:hello@micheal.com" className='p-text'> zanahtech@gmail.com</a>

        
      </div>


      <div className="app__footer-card">
        <img src={images.mobile} alt='mobile' />
        <a href="tel: +1 (254) 456-789" className='p-text'> +1 (254) 456-789</a>
      </div>
    </div>
{!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className="app__flex">
          <input type="text" name='name' className="p-text" placeholder='your name' value={name} onChange={handleChangeInput}/>
          
        </div>
        <div className="app__flex">
          <input type="text" name='email' className="p-text" placeholder='your email' value={email} onChange={handleChangeInput}/>
          
        </div>
        <div className="app__flex">
         <textarea 
         className='p-text'
         placeholder='Your Message'
         value={message}
         name={message}
         onChange={handleChangeInput}
         
         />

        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'sending' : 'Send Message'}</button>

        
        

      </div>
      : <div>
        <h3 className='head-text'> thank you for getting in touch </h3>

      </div>}
 
    </>
  )
}

export default AppWrap
(MotionWrap
  (Footer, 'app__footer'), 
  'contact', 'app__whitebg')