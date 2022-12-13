import { NavDropdown, Nav, Navbar, Container, Form } from 'react-bootstrap'

import './Navbar.css';
import mbc from '../../assets/img/mbc logo.png'

const NavbarAll = () => {
  return(
  <Navbar bg="light" expand="lg" className='header'>
    <Container fluid>
      <Navbar.Brand href="#home">
        <a href="main.html" class="navbar-brand"><img src={mbc} alt="mbc logo" width="200" /></a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Profile" id='profile'>
            <NavDropdown.Item href='/Dosen'>
              Dosen Pembimbing
            </NavDropdown.Item>
            <NavDropdown.Item href='/Asisten'>
              Asisten
            </NavDropdown.Item>
            <NavDropdown.Item href='/Caas'>
              Calon Asisten
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Division" id="division">
            <NavDropdown.Item href="/Division/cyber">
              CyberSecurity
            </NavDropdown.Item>
            <NavDropdown.Item href="/Bigdata">
              Big Data
            </NavDropdown.Item>
            <NavDropdown.Item href="/Division/gis">
              GIS
            </NavDropdown.Item>
            <NavDropdown.Item href='/Division/gametech'>
              GameTech
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='Skill : Git, Python, Linux, etc'
            className='me-2'
            aria-label='search'
          />
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarAll;