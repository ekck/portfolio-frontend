import React from 'react'
import { NavigationDots , SocialMedia } from '../components'

const AppWrapp = (Component, idName, classNames) => function HOC (){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
    <div className='app__wrapper app__flex'>

      <Component />
<div className='copyright'>
  <p className='p-text'> @2024 Zanah Technology</p>
  <p className='p-text'> All Rights Reserved </p>
</div>
    </div>
    <NavigationDots active = {idName}/>
    </div>
    
  )
}

export default AppWrapp
