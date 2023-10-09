
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (

    <div id='contact' className='footer'>
      <hr />
      <div className='contact'>
         <div className='tel'>
          <p>Call</p>
          <a href="tel:1-+254797710074">+254 97 710 074</a>
         </div>
         <div className='tel'>
          <p>E-mail</p>
          <a href = "mailto: kamaueric821@gmail.com">Send Email kamaueric821@gmail.com</a>
         </div>
      </div>
      <div className='bottom__footer'>
      <div className='note'>
        <p>New Innovation Day by Day</p>
      </div>
      <div className='links'>
            <AiFillGithub className="link-icons" size="2rem" />
            <AiFillLinkedin className="link-icons" size="2rem" />  
            <AiFillInstagram className="link-icons" size ="2rem" />
        </div>
      </div>
    </div>
  )
}

export default Footer