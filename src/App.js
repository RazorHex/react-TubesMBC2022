import 'bootstrap/dist/css/bootstrap.min.css';
import Foot from './Components/Footer';
import Home from './Components/Home';
import Dosen from './Components/Dosen';
import NavbarAll from './Components/Navbar';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavbarAll/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dosen' element={<Dosen />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;
