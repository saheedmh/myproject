
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './loginpage';
import Signuppage from './signpage';
import Home from './homepage';
import Program from './program';
import Header from './header';
import About from './about';
import RegisterComponent from './register';
import Form from './Form';
import Getaxios from './getpost';
import {useState, useEffect} from 'react';
import api from './api/post';
import NavScrollExample from './navsbar.js'
import Contactus from './contactUs.js';
import Navs from './navba.js';

import './App.css'
import Footer from './footer.js';

//import HocAbout from './HocAbout';
//import Hodtext from './Hodtext';

function App() {
  //const [post, setpost]= useState(false)
 
  return (
    <BrowserRouter>
    <div>
    {/**<Navs/>**/}
<Header/>
    
   
    
  
    {/**<div>
    {
      post?<h2>lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores saepe ea iusto. Aspernatur, explicabo qui? Eum, recusandae autem accusantium ipsa, fugiat labore mollitia quidem, voluptatibus et asperiores provident optio!</h2>
  :null
    }
    <button onClick={()=>setpost(!post)}>toggle</button>
</div>
     **/}
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/program' element={<Program/>}></Route>
      <Route path='/contactUs' element={<Contactus/>}></Route>
      
      <Route path='/Form' element={<Form/>}></Route>
      <Route path='/about' element={<About/>}>
      </Route>
      <Route path='/getpost' element={<Getaxios/>}>


      </Route>
      <Route path='loginpage' element={<Loginpage/>}></Route>
      <Route path='/signpage' element={<Signuppage/>}></Route>
      <Route path='/register' element={<RegisterComponent/>}></Route>
      </Routes>
      
      {/**<Route path='/Hodtext' element={<Hodtext/>}>
      </Route>
      
      
      
       **/}
      
      <Contactus/>
       <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
