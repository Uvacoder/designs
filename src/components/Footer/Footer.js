import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBehance, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <>
         <hr/>
        <p>Made by Mariam Parvez in 2021</p>
        <div>
            <a href="https://github.com/mariamparvez" target="_blank"><FontAwesomeIcon  className="icons" icon={faGithub}/></a>
            <a href="https://www.behance.net/mariamparvez" target="_blank"><FontAwesomeIcon  className="icons" icon={faBehance}/></a>
            <a href="https://www.linkedin.com/in/zmariam/" target="_blank"><FontAwesomeIcon  className="icons" icon={faLinkedin }/></a>
        </div>
        </>
     );
}
 
export default Footer;