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
            <a href="https://facebook.com"><FontAwesomeIcon className='icon' icon={faFacebook}/></a>
            <a href="https://twitter.com"><FontAwesomeIcon className='icon' icon={faInstagram}/></a>
            <a href="https://instagram.com"><FontAwesomeIcon className='icon' icon={faTwitter}/></a>
            </div>
           </footer>
    );
}
 
export default Footer;