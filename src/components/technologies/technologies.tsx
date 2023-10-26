import ProgressBar from '../ProgressBar/ProgressBar';
import {motion, useAnimation} from "framer-motion";
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';




const Technology = () => {
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
    initial="hidden"
    animate = {control}
    transition={{duration: 0.5}}

    id='technology' className='technologies'>
        <h2>Tech Stack</h2> 
        <hr />
        <h3 className='sub_heading'>Frontend</h3>
        <div className='frontend'>
        <div className='technology'>
            <h3>React</h3> 
            <ProgressBar progress={90} backgroundColor= "#3498db" outline = "solid 1px #3498db" />
        </div>
        <div className='technology'>
            <h3>Redux</h3> 
            <ProgressBar progress={80} backgroundColor= "#FC4F00" outline = "solid 1px #FC4F00" />
        </div>
        <div className='technology'>
            <h3>HTML</h3> 
            <ProgressBar progress={99} backgroundColor="#8B1874" outline="solid 1px #8B1874" />
        </div>
        <div className='technology'>
            <h3>CSS</h3> 
            <ProgressBar progress={89} backgroundColor="#B71375" outline="solid 1px #B71375" />
        </div>
        <div className='technology'></div>
        </div>
        <h3 className='sub_heading'>Backend</h3>
        <div className='backend'>
        <div className='technology'>
            <h3>Node JS</h3> 
            <ProgressBar progress={70} backgroundColor="#F79540" outline="solid 1px #F79540" />
        </div>
        <div className='technology'>
            <h3>Express</h3> 
            <ProgressBar progress={60} backgroundColor="#B31312" outline="solid 1px #b31312" />
        </div>
        </div>
        <h3 className='sub_heading'>Database</h3>
        <div className='database'>
        <div className='technology'>
            <h3>MongoDB</h3> 
            <ProgressBar progress={65} backgroundColor="#45FFCA" outline="solid 1px #45FFCA" />
        </div>
        <div className='technology'></div>
        </div>
        <h3 className='sub_heading'>API</h3>
        <div className='apis'>
        <div className='technology'>
            <h3 >Restful API</h3> 
            <ProgressBar progress={80} backgroundColor="#EA1179" outline="solid 1px #EA1179" />
        </div>
        <div className='technology'></div>
        </div>

    </motion.div>
    
    )
}

export default Technology;