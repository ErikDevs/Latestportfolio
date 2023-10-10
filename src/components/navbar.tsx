
import { useContext} from "react"
import { StateContext } from "./StateProvider/StateProvider";



const Navbar = () => {

    const {theme, isOpen} : any = useContext(StateContext);

    

    const themeStyles = {
        backgroundColor: theme ? "#0a192f" : "#fff",
        color: theme ? "#ccd8f8" : "#0f1624",
        
    }
    
    const buttonStyles =  {
        backgroundColor: theme ? "transparent" : "transparent",
        color: theme ? "#48c0a8" : "#0f1624",
        outline: theme ? "1px solid #48c0a8" : "1px solid #FE0000",
      }

  return (
            
            <div style={themeStyles} className={isOpen? "navbar__links animated" : "navbar__links"}>
            <h3 className="nav_link"><a href="#about">About Me</a></h3>
            <h3 className="nav_link"><a href="#work">Projects</a></h3>
            <h3 className="nav_link"><a href="#technology">Technology</a></h3>
            <h3 className="nav_link"><a href="#contact">Contact</a></h3>
            <button className='resume_btn' style={buttonStyles}> Resume </button>
            </div>
            
  )
}

export default Navbar