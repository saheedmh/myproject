
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './loginpage';
import Signuppage from './signpage';
import Home from './homepage';
import Program from './program';
import Header from './header';
import About from './about';
import Coaches from './coaches';
import Student from './student';
import Support from './support';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    
    
      <Routes>
      
      <Route path='/' element={<Home/>}></Route>

      <Route path='program' element={<Program/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='loginpage' element={<Loginpage/>}></Route>
        <Route path='signpage' element={<Signuppage />}></Route>
      
      <Route path='coaches' element={<Coaches/>}>
      </Route>
      <Route path='student' element={<Student/>}></Route>
      <Route path='support' element={<Support/>}></Route>
      
      
      
       
      </Routes>
      
    
    </div>
    </BrowserRouter>
  );
}

export default App;
