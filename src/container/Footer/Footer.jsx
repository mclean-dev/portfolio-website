import React, {useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Footer.scss'


const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value})
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e) => {
   
    const contact = {
      "form-name": 'contact',
      name: name,
      email: email,
      message: message
    }
    
    e.preventDefault();
    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(contact),
    })
      .then(() => {
        setTimeout(() => {
          setLoading(false)
          setIsFormSubmitted(true)
          }, 750)
      })
      .catch((error) => alert(error));
   
  }

  return (
    <>
    <h2 className="head-text">Have a coffee & chat with me.</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href="mailto:mclean.jb@gmail.com" className='p-text'>mclean.jb@gmail.com</a>
      </div>
      <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (919) 880-5025" className='p-text'>+1 (919) 880-5025</a>
        </div>
      </div>
      {!isFormSubmitted ?
        <form className="app__footer-form app__flex" name='contact' method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />

          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your Name' name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input type="email" className="p-text" placeholder='Your Email' name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
        <textarea name="message" placeholder="Your Message" value={message} onChange={handleChangeInput} className="p-text" />

      </div>
      <button className="p-text" type="submit">{loading ? 'Sending' : 'Send Messsage' }</button>
    </form>
    : <div><h3 className='head-text'>Thank you for getting in touch!</h3></div>
    }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)