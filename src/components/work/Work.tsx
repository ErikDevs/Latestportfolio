import { useEffect } from 'react';
import Ecommerce from '../../assets/ecommerce.png';
import Car from '../../assets/car-rental.png';
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const Projects = () => {




  const heroVariant = {
    visible: {opacity: 1, scale: 1, x: 1},
    hidden : {opacity: 0, scale: 0, x: 0}
 }

 const control = useAnimation()

 

 const [ref, inView] = useInView()

 useEffect(() => {
   if(inView) {
     control.start("visible")
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
    id='work' className='work'>
        <h2 className='title'>Featured Projects</h2>
        <div className= 'featured-projects'>
        <div className='project'>
          <a href="https://modern-ecommerce-design.vercel.app/"><img src={Ecommerce} alt="E-commerce" /></a>
          <h3>E-commerce Web App</h3>
          <p><a href="https://modern-ecommerce-design.vercel.app">View Demo</a></p><span><a href="https://github.com/ErikDevs/modern-ecommerce.git">Source Code</a></span>        </div>

        <div className='project'>
          <a href="https://car-web-app-zt2u.vercel.app/"><img src={Car} alt="E-commerce" /></a>
            <h3>E-commerce Web App</h3>
          <p><a href="https://car-web-app-zt2u.vercel.app/">View Demo</a></p><span><a href="https://github.com/ErikDevs/Car-web-app.git">Source Code</a></span>
        </div>
        </div>
       
    </motion.div>

  )
}

export default Projects