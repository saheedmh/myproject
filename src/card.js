

import './style/card.css'
import {Card} from 'react-bootstrap/Card';

const Cards = () => {
    return (  
        <div class="card-group">
        <div class="card">
          <img src="./images/Ramzi.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Ramzi - AppTweak</h5>
            <h5 class="card-title">UX/UI Designer</h5>
            
            <p class="card-text">Our program is free of charge, although we ask for strong commitment during our 7 month-journey. And you know what? Many alumni stay actively involved!.</p>
            </div>
        </div>
        <div class="card">
          <img src="./images/Gita.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Gita - ttl.be</h5>
            <h5 class="card-title">QA Developer</h5>
            
            <p class="card-text">"What HYF brought to me is you should never give up and always try to find a way when you’re stuck. I’ve learned that dreaming big without big efforts will bring you nowhere. HackYourFuture was part of my journey to become who I am now.".</p>
            
            </div>
        </div>
        <div class="card">
          <img src="./images/Edwardo.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Edouardo - Capgemini</h5>
            <h5 class="card-title">IT Consultant</h5>
            
            <p class="card-text">"Hack your future definitely built the bridge between the unknown and the doors of my personal success, writing code is now part of my life and I will never forget the lessons learned and time spent with the fellow students and coaches. A big thank you!".".</p>
            </div>
        </div>
      </div>

    );
}
 
export default Cards;;
