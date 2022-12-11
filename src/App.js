import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarAll from './Components/Static/Navbar';
import Foot from './Components/Static/Footer';
import Home from './Components/Home';
import Dosen from './Components/Dosen';

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
