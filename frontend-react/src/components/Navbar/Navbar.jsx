import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss'

const variants = {
    open: { opacity: 1, x: 0},
    closed: { opacity: 0, x: "+100%"},
}

const Navbar = () => {
    const [toggle, setToggle] = useState(false);


    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo" onClick={() => {window.location.href='#home'}}>
                <p className='p-text'>McLean-Dev</p>
            </div>
            <ul className="app__navbar-links">
                {['home', 'portfolio', 'about', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {
                    (
                        <motion.div
                            animate={toggle ? "open" : "closed"}
                            variants={variants}
                            initial={false}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul className="app__navbar-links">

                                {['home', 'portfolio', 'about', 'contact'].map((item) => (
                                    <li key={item}>

                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                            </ul>

                        </motion.div>
                    )
                }
            </div>

        </nav>
    )
}

export default Navbar