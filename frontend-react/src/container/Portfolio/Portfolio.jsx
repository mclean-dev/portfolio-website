import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import axios from 'axios'

import './Portfolio.scss'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }])
  const [portfolio, setPortfolio] = useState([])
  const [filterPortfolio, setFilterPortfolio] = useState([])

  useEffect(() => {
    const query = '*[_type == "portfolio"] | order(order asc)';
    axios.get('/.netlify/functions/getter', { params: { "query": `${query}`  } })
    .then((data) => {      
      setPortfolio(data.data);
      setFilterPortfolio(data.data);
    })
 
  
  }, [])
  
  const handlePortfolioFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if (item === 'All') {
        setFilterPortfolio(portfolio);
 
      } else {
        setFilterPortfolio(portfolio.filter((portfolio) => portfolio.tags.includes(item))); 
      }
    }, 500)

  }
  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio</span></h2>

      <div className="app__portfolio-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handlePortfolioFilter(item)}
            className={`app__portfolio-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5 }}
        className="app__portfolio-projects"

      >
        {filterPortfolio.map((portfolio, index) => (
          <div className="app__portfolio-item app__flex" key={index}>
            <div className="app__portfolio-img app__flex">
              <img src={portfolio.image} alt={portfolio.name} />
              <motion.div
                whileInView={{ opacity: [1, 0] }}
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                className="app__portfolio-hover app__flex"

              >
                <a href={portfolio.portfolioLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={portfolio.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__portfolio-content app__flex">
              <h4 className="bold-text">{portfolio.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{portfolio.description}</p>
              <div className="app__portfolio-content-links">
              <a href={portfolio.portfolioLink} target="_blank" rel="noreferrer">
                  <div className="app__flex">
                    <AiFillEye />
                  </div>
                </a>
                <a href={portfolio.codeLink} target="_blank" rel="noreferrer">
                  <div className="app__flex">
                    <AiFillGithub />
                  </div>
                </a>
              </div>
              <div className="app__portfolio-tag app__flex">
                <p className="p-text">{portfolio.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Portfolio, 'app__portfolio'),'portfolio','app__whitebg')