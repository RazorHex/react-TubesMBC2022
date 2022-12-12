import 'bootstrap/dist/css/bootstrap.min.css';
import './all.css'
import NavbarAll from './Components/Static/Navbar';
import Foot from './Components/Static/Footer';
import Home from './Components/Home';
import Dosen from './Components/Dosen';
import Asisten from './Components/Asisten'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavbarAll/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dosen' element={<Dosen />} />
        <Route path='/Asisten' element={<Asisten />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;
