import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import  Navbar  from '../navbar'
import { useMediaQuery } from 'react-responsive';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';




const Header = () => {

const { theme, toggleTheme, isOpen, toggleMenu }: any =  useContext(StateContext);








const isLargeScreen = useMediaQuery({query: "(min-width: 1000px)"})



  return (
        <>
        <div className="header">
        <h3>DEV_ERICK</h3>    
        <div className='buttons'>
        <button style={{backgroundColor: "transparent", outline: "none", border: "none"}}  onClick={toggleTheme}>
        {theme ? <FontAwesomeIcon icon={faMoon as IconProp} style={{color: "#fff"}} className='icons' /> : <FontAwesomeIcon icon={faSun as IconProp} style={{color: "#0f1624"}} className='icons' /> }
        </button>
        <i className='menu-bar' onClick={toggleMenu} >{isOpen ? <FontAwesomeIcon icon={faXmark as IconProp} style={{fontSize: "1.5rem"}} /> : <FontAwesomeIcon icon={faBars as IconProp} style={{}} /> }</i>
        </div>
       </div>   
       {isLargeScreen && <Navbar />}
       {isOpen && <Navbar />}

       </>
  )
}

export default Header