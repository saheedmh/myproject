import {Card} from 'react-bootstrap/Card'; 


import './style/teamcontent.css';
const Teamcomponent = () => {
    return ( 
        <div className="team-group ">
        <h1 class="heading ml-5 ">our team</h1>
        <div className="card-group " id='groupss'>
        <div class="card">
          <img src="./images/team1.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Evan Cole</h5>
            <h5 class="card-title">Educational </h5>
            <h5 class="card-title">Coordinator </h5>
            <p class="card-text"></p>
            </div>
            </div>
       
            <div class="card">
          <img src="./images/team3.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Evan Cole</h5>
            <h5 class="card-title">General </h5>
            <h5 class="card-title">Coordinato </h5>
            <p class="card-text"></p>
            </div>
            </div>
      
        <div class="card">
          <img src="./images/team2.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Partnerships & Communication </h5>
            <h5 class="card-title">Coordinator</h5>
            
            <p class="card-text"></p>
            </div>
            </div>
        
       
</div>
        </div>
     );
}
 
export default Teamcomponent;