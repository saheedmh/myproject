import './style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (  
        <footer className='footer  text-white'>
        <div className="footer-text">
            <h1>Hack Your Future (part of Open Knowledge Belgium)</h1>
            <p className='bg-dark text-white '>Open Knowledge Belgium vzw
Cantersteen 12
1000 Bruxelles
contact@hackyourfuture.be
</p>
        </div>
        <div className="social-icon text-white">
            <a href="https://facebook.com"><FontAwesomeIcon className='icon text-white' icon={faFacebook}/></a>
            <a href="https://intagram.com"><FontAwesomeIcon className='icon text-white' icon={faInstagram}/></a>
            <a href="https://twitter.com"> <FontAwesomeIcon className='icon text-white' icon={faTwitter}/></a>
            </div>
           </footer>
    );
}
 
export default Footer;