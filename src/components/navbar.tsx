
import { useContext} from "react"
import { StateContext } from "./StateProvider/StateProvider";
import {Link} from 'react-scroll'



const Navbar = () => {

    const {theme} : any = useContext(StateContext);

   
    const themeStyles = {
        backgroundColor: theme ? "#0a192f" : "#fff",
        color: theme ? "#ccd8f8" : "#0f1624",
    }
    
    const buttonStyles =  {
        backgroundColor: theme ? "transparent" : "transparent",
        color: theme ? "#48c0a8" : "#0f1624",
        outline: theme ? "1px solid #48c0a8" : "1px solid #FE0000",
      }

      const handleSetActive = (to: any) => {
        console.log(to);
      };

  return (
            <div style={themeStyles} className="navbar__links">
            <h3 className="nav_link">
            <Link
            activeClass="active" 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={-400} 
            duration={500} 
            onSetActive={handleSetActive} href="#about">About Me</Link>
            </h3>
            <h3 className="nav_link">
                <Link 
                activeClass= "active"
                to = "work"
                spy = {true}
                smooth = {true}
                offset = {-400}
                duration = {500}
                onSetActive = {handleSetActive}
                href="#work">Projects</Link>
            </h3>
            <h3 className="nav_link">
                <Link 
                activeClass= "active"
                to = "technology"
                spy = {true}
                smooth = {true}
                offset = {-400}
                duration = {500}
                onSetActive = {handleSetActive}
                href="#technology">Technology</Link>
            </h3>
            <h3 className="nav_link">
                <Link 
                activeClass = "active"
                to = "contact"
                spy = {true}
                smooth = {true}
                offset = {-50}
                duration = {500}
                onSetActive = {handleSetActive}
                href="#contact">Contact</Link></h3>
            <button  className='resume_btn' style={buttonStyles}> <a href="https://docs.google.com/document/d/1PDt9ojpXOZay_Ui4JFZeGE_nZYnGtAre99DW0niYPZc/edit">Resume</a> </button>
            </div> 
  )
}

export default Navbar