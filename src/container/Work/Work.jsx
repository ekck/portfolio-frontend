import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import './Work.scss'

import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

const Work = () => {

  const handleWorkFilter = (item) =>{}
  const [animateCard, setanimateCard] = useState({y:0, opacity: 1})
  const [works, setWorks] = useState([])
  const [filterWork, setfilterWork] = useState([])


useEffect(() => {
  const query = '*[_type == "works"]';

  client.fetch(query)
  .then((data) => {
    setWorks(data);
    setfilterWork(data);

  })
 
}, [])

  const [activeFilter, setActiveFilter] = useState('All')



  return (
    <>
      <h2 className="head-text">
      My Creative 
      <span>Portfolio</span>
    
      Section
      
    </h2>
    <div className='app__work-filter'>
      {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
        <div key={index}
        onClick={() => handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
          {item}
        </div>
      ))}
    </div>
    <motion.div
    animate={animateCard}
    transition={{ duration: 0.5, delayChildren: 0.5, }}
    className='app__work-porfolio'
    >
      {filterWork.map((work, index) => (
        <div className="app__work-item app__flex" key={index}>
          <div className="app__work-img app__flex">
            <img src={urlFor(work.imgUrl)} alt={work.name} /> 
          </div>
        </div>
      ))}

      <motion.div
      whileHover={{opacity: [0, 1]}}
      transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0}}
      className='app__work-hover app__flex'
      
      >



        <a href={works.projectLink} target='_blank' rel='noreferrer'>
          <motion.div
          whileInView={{ scale: [0, 1]}}
          whileHover={{ scale: [1, 0.9]}}
          transition={{ duration: 0.25 }}
          className='app__flex'
          >
              <AiFillEye />
          </motion.div>
        </a>

        <a href={works.projectLink} target='_blank' rel='noreferrer'>
          <motion.div
          whileInView={{ scale: [0, 1]}}
          whileHover={{ scale: [1, 0.9]}}
          transition={{ duration: 0.25 }}
          className='app__flex'
          >
              <AiFillGithub />
          </motion.div>
        </a>


      </motion.div>

    </motion.div>
    </>

  
    
  )
}

export default Work
