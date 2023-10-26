import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import  Navbar  from '../navbar'
import { useMediaQuery } from 'react-responsive';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

import {motion} from 'framer-motion'


const Header = () => {

const { theme, toggleTheme, isOpen, toggleMenu }: any =  useContext(StateContext);

const isLargeScreen = useMediaQuery({query: "(min-width: 1000px)"})
const  variants = {
  open : {opacity: 1, y: "0"},
  closed: {opacity: 0, y:"-100%"}
}




  return (
        <>
        <div id='header' className="header">
        <h3>DEV_ERICK</h3>    
        <div className='buttons'>
        <button style={{backgroundColor: "transparent", outline: "none", border: "none"}}  onClick={toggleTheme}>
        {theme ? <FontAwesomeIcon icon={faMoon as IconProp} style={{color: "#fff"}} className='icons' /> : <FontAwesomeIcon icon={faSun as IconProp} style={{color: "#0f1624"}} className='icons' /> }
        </button>
        <i className='menu-bar' onClick={toggleMenu} >{isOpen ? <FontAwesomeIcon icon={faXmark as IconProp} style={{fontSize: "1.5rem"}} /> : <FontAwesomeIcon icon={faBars as IconProp}  /> }</i>
        </div>
       </div>   
       {isLargeScreen && <Navbar />}
       <motion.div 
          variants={variants}
          animate={isOpen ? "open" : "closed"}
          transition={{duration: 0.5}}>
         {isOpen && <Navbar />}
       </motion.div>

       </>
  )
}

export default Header