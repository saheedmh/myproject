import Firstcontent from './firstcontent';
import Secondcontent from './secondcontent';
import Fourthcomponent from './fourthcomponet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './card';
import Logos from './logo';

import {Link, useNavigate} from 'react-router-dom';
import Staff from './staffimage';
import React, {Component, useEffect} from 'react';
import axios from 'axios';

const Home = () =>{
    
    return ( 
        <div className="homepage">
          <Staff/>
    <Firstcontent/>
    <Secondcontent/>
    <Fourthcomponent/>
    <Cards/>
    <Logos/>
    
    
        </div>
     );
}

export default Home;