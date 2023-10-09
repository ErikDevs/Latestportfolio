
import { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import AnimatedBackground from "../BackgroundAnimation/AnimatedBackground";

const Hero= () => {

    const { theme }: any =  useContext(StateContext);

    const fontStyles =  {
      color: theme ? "#48c0a8" : "#FE0000",
    }

    const btnStyle = {
        outline: theme ? "1px solid #48c0a8" : "1px solid #FE0000",
        color: theme ? "#48c0a8" : "#0f1624"
    }

  
  return (
    <>
    <div className='hero-section'>
        <div className='hero-right'>
        <p style={fontStyles} className='intro'>Hi, my name is</p>
        <h1 className='hero-name'>Erick Kariuki.</h1>
        <h1 className='tag-line'>I build things for the web.</h1>
        <p className='description'>I am a frontend developer speciallizing in building and designing exceptional digital experience...
        </p>
        <a href="#about"><button style={btnStyle} className='btn-hire'>Learn More</button></a>
        <div className='links'>
            <AiFillGithub className="link-icons" size="2rem" />
            <AiFillLinkedin className="link-icons" size="2rem" />  
            <AiFillInstagram className="link-icons" size="2rem" />

        </div>
        </div>
        <div className="hero-left"> <AnimatedBackground /></div>
    </div>
  
   

     </>
  )
}

export default Hero