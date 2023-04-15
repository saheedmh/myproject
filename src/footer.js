import './style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (  
        <footer className='footer'>
        <div className="footer-text">
            <h1>Hack Your Future (part of Open Knowledge Belgium)</h1>
            <p>Open Knowledge Belgium vzw
Cantersteen 12
1000 Bruxelles
contact@hackyourfuture.be
</p>
        </div>
        <div className="social-icon">
            <FontAwesomeIcon className='icon' icon={faFacebook}/>
            <FontAwesomeIcon className='icon' icon={faInstagram}/>
            <FontAwesomeIcon className='icon' icon={faTwitter}/>
            </div>
           </footer>
    );
}
 
export default Footer;