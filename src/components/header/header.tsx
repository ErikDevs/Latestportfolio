import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBars} from '@fortawesome/fontawesome-free-solid'
import { useContext, useState} from "react";
import { StateContext } from "../StateProvider/StateProvider";
import  Navbar  from '../navbar'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { useMediaQuery } from 'react-responsive';



const Header = () => {

const { theme, toggleTheme, isOpen, toggleMenu }: any =  useContext(StateContext);




const anchor = {
  color: theme ? "#48c0a8" : "#0f1624", 
}



const isLargeScreen = useMediaQuery({query: "(min-width: 1000px)"})



  return (
        <>
        <div className="header">
        <h3>DEV_ERICK</h3>    
        <div className='buttons'>
        <button style={{backgroundColor: "transparent", outline: "none", border: "none"}}  onClick={toggleTheme}>
        {theme ? <FontAwesomeIcon icon={faMoon} style={{color: "#fff"}} className='icons' /> : <FontAwesomeIcon icon={faSun} style={{color: "#0f1624"}} className='icons' /> }
        </button>
        <i className='menu-bar' onClick={toggleMenu} >{isOpen ? <FontAwesomeIcon icon={faXmark} style={{fontSize: "1.5rem"}} /> : <FontAwesomeIcon icon={faBars} /> }</i>
        </div>
       </div>   
       {isLargeScreen && <Navbar />}
       {isOpen && <Navbar />}

       </>
  )
}

export default Header