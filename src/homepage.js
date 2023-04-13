import Firstcontent from './firstcontent';
import Secondcontent from './secondcontent';
import Fourthcomponent from './fourthcomponet';

import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './card';
import Logos from './logo';
import Contactus from './contactUs';
import Footer from './footer'
;
import {Link} from 'react-router-dom';
import Staff from './staffimage';
const Home = () => {
    return ( 
        <div className="homepage">
        
    
        <Staff/>
    <Firstcontent/>
    <Secondcontent/>
    <Fourthcomponent/>
    <Cards/>
    <Logos/>
    <Contactus/>
    
    <Footer/> 
        </div>
     );
}
 
export default Home;