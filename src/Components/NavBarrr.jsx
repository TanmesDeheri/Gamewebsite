import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {React,useState} from 'react'
import '../Styles/Navbar.css'
import Form from 'react-bootstrap/Form';

export default function NavBarrr(props) {
    const [darkMode, setdarkMode] = useState(false)
    const handleSwitch=(event)=>{
        const ischecked=event.target.checked
        setdarkMode(ischecked)
       props.handleTheme(darkMode)
    }
    return (
        <div style={{borderBottom:'2px solid wheat'}}>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">GameHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Indie</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Adventure</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">RPG</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Stratergy</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Shooter</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Casual</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Simulation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Puzzle</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Arcade</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Platformer</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Multiplayer</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Racing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Fighting</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Family</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Board Games</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Card</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Form>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Dark Mode 🌛"
                        style={{color:'black'}}
                        checked={darkMode}
                        onChange={handleSwitch}
                    />
                 </Form>
            </Navbar>
        </div>
    )
}