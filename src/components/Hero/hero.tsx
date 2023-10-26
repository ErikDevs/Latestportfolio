import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { StateContext } from "../StateProvider/StateProvider";

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import AnimatedBackground from "../BackgroundAnimation/AnimatedBackground";

const Hero= () => {

    const { theme }: any =  useContext(StateContext);

  
    const btnStyle = {
        outline: theme ? "1px solid #48c0a8" : "1px solid #FE0000",
        color: theme ? "#48c0a8" : "#0f1624"
    }

  const heroVariant = {
     visible: {opacity: 1, scale: 1, x:1},
     hidden : {opacity: 0, scale: 0, x:0}
  }

  const control = useAnimation()

  

  const [ref, inView] = useInView()

  useEffect(() => {
    if(inView) {
      control.start("visible")
      control.start("height")
    } else {
      control.start("hidden")
    }
  }, [control, inView]);
  
  return (
    
    <motion.div 
    ref={ref}
    variants={heroVariant}
    initial = "hidden"
    animate = {control}
    transition={{duration: 0.5}}

    className='hero-section'>
        <div className='hero-right'>
        
        <h1 className='hero-name'>Hey, I'm Erick.</h1>
        <h1 className='tag-line'>A Frontend Developer</h1>
        <p className='description'>I am a frontend developer speciallizing in building and designing exceptional digital experience...
        </p>
        <a href="#about"><button style={btnStyle} className='btn-hire'>Learn More</button></a>
        <div className='links'>
            <a href="https://github.com/ErikDevs"><AiFillGithub className="link-icons" size="2rem" /></a>
            <a href="https://www.linkedin.com/in/erick-kariuki/"><AiFillLinkedin className="link-icons" size="2rem" /></a>
            <a href=""><AiFillInstagram className="link-icons" size="2rem" /></a>

        </div>
        </div>
        <div className="hero-left"> <AnimatedBackground /></div>
    </motion.div>
  
   

   
  )
}

export default Hero