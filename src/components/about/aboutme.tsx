import { useContext } from 'react'
import { StateContext } from '../StateProvider/StateProvider'

const About = () => {

 const {theme}: any = useContext(StateContext);

 const styles = {
    backgroundColor: theme ? "#ccd8f8" : "#0f1624",
    color: theme ? "#0f1624" : "#ccd8f8",
 }

 const inputSyles = {
    color: theme ? "#0f1624" : "#ccd8f8",
 }
  return (
    <div id='about' className='about'>
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
        <input style={inputSyles} type="email" placeholder='email-address' />
        <input style={inputSyles} type="text" placeholder='project-idea' />
        <textarea style={inputSyles} name="" placeholder='Brief description' id="" cols="30" rows="10"></textarea>
        <button type='submit'>Submit</button>
    </div>
     </div>

    </div>
  )
}

export default About