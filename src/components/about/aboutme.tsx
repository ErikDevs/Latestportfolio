import { useContext, useEffect } from 'react'
import { StateContext } from '../StateProvider/StateProvider'
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const About = () => {

 const {theme}: any = useContext(StateContext);

 const styles = {
    backgroundColor: theme ? "#ccd8f8" : "#0f1624",
    color: theme ? "#0f1624" : "#ccd8f8",
 }

 const inputSyles = {
    color: theme ? "#0f1624" : "#ccd8f8",
    outline: "none"
 }

 const variant =  {
   visible: {opacity: 1, scale: 1, x: 1},
   hidden: {opacity: 0, scale: 0, x: 0}
}

const control = useAnimation()

const [ref, inView] = useInView();

useEffect (() => {

   if (inView) {
       
       control.start("visible")
    } else {

       control.start("hidden");
}
}, [control, inView]);

  return (
    <motion.div
    ref={ref}
    variants={variant}
    initial = "hidden"
    animate = {control}
    transition={{duration: 0.5}}
    id='about' className='about'>
     <h3>About Me </h3>
     <hr />
  
     <div className='about-group'>
     <div className='left'>
        <p>Passionate Full Stack Developer with comprehensive experience in the MERN stack. 
        Proficient in designing and implementing user-centric web applications and APIs. 
        Adept at collaborating with cross-functional teams and continuously adapting to new technologies. 
        Committed to delivering high-quality code and exceptional user experiences.</p>
    </div>

    <div style={styles} className='right'>
        <input style={inputSyles} type="text" placeholder='Name' />
        <input style={inputSyles} type="email" placeholder='Email-address' />
        <input style={inputSyles} type="text" placeholder='Have a project-idea' />
        <textarea style={inputSyles} name="" placeholder='Brief description' cols= {30} rows={10}></textarea>
        <button type='submit'>Submit</button>
    </div>
     </div>

    </motion.div>
  )
}

export default About