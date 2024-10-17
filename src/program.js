import  './style/programcontent.css'
import ProgramFirstContent from "./programFirstContent";
import Footer from './footer';
import Contactus from './contactUs';
const Program = () => {
    return ( 
        <div className="program-div">
            <ProgramFirstContent/>
            <Contactus/>
            <Footer/> 
    
        </div>
     );
}
 
export default Program;