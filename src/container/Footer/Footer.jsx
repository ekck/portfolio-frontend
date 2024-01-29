import React, { useState, useEffect } from 'react'
import './Footer.scss'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Footer.scss'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default AppWrap
(MotionWrap
  (Footer, 'app__footer'), 
  'contact', 'app__whitebg')