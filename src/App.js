import 'bootstrap/dist/css/bootstrap.min.css';
import './all.css'
import NavbarAll from './Components/Static/Navbar';
import Foot from './Components/Static/Footer';
import Home from './Components/Home';
import Dosen from './Components/Dosen';
import Asisten from './Components/Asisten';
import Bigdata from './Components/Bigdata';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavbarAll/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Dosen' element={<Dosen />} />
        <Route exact path='/Asisten' element={<Asisten />} />
        <Route exact path='/Bigdata' element={<Bigdata />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;
