import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss';

const About = () => {
  

  
  return (
    <>
      <h2 className='head-text'>
        I am a <span>former Academic</span><br /> turned <span>Developer</span>
      </h2>
      <div className="app__about-link" onClick={() => {window.open("https://docs.google.com/document/d/1OBfOpzmg_xoZ2lcGeMW6IAt5THgsjRGSqaiKWJgpGQs/edit?usp=sharing", "_blank")}}><p className="p-text">Resume</p></div>
      
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__primarybg')