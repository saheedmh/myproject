import Aboutcontent from "./aboutcontent";

import SecondCol from "./secondscol";
import Teamcomponent from "./teamcomponent";
 
const About = () => {
    return ( 
        <div className="about-div">
            <Aboutcontent/>
            <SecondCol/>
            <Teamcomponent/>
            

        </div>
     );
}
 
export default About;