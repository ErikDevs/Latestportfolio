import { useEffect, useState } from 'react';
import Ecommerce from '../../assets/ecommerce.png';
import Car from '../../assets/car-rental.png';
const Projects = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 200) {
        setAnimated(true)
      } else {
        setAnimated(false)
      } 
    }
    window.addEventListener('scroll', handleScroll);
    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  
  return (
    <>
    <div id='work' className='work'>
        <h2 className='title'>Featured Projects</h2>
        <div className={`featured-projects ${animated ? 'active' : ""}`}>
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
       
    </div>
    </>
  )
}

export default Projects