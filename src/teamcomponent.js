import {card} from 'react-bootstrap/Card'; 


import './style/teamcontent.css';
const Teamcomponent = () => {
    return ( 
        <div className="team">
        <h1 className="heading  ">our team</h1>
        <div className="card-group cards" id='groupss'>
        <div className="card">
          <img src="./images/team1.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Evan Cole</h5>
            <h5 className="card-title">Educational </h5>
            <h5 className="card-title">Coordinator </h5>
            <p className="card-text"></p>
            </div>
            </div>
       
            <div className="card">
          <img src="./images/saheed.jpg" className="card-img-top" alt="..." style={{height:"200px", width:"300px"}} />
          <div className="card-body">
            <h5 className="card-title">seidu menyaga</h5>
            <h5 className="card-title">Coordinator </h5>
            <h5 className="card-title">I.T consutant </h5>
            <p className="card-text"></p>
            </div>
            </div>
      
        <div className="card">
          <img src="./images/team2.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Partnerships & Communication </h5>
            <h5 className="card-title">Coordinator</h5>
            
            </div>
            </div>
        
       
</div>
        </div>
     );
}
 
export default Teamcomponent;