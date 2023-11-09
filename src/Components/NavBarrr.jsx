import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { React, useState } from 'react'
import '../Styles/Navbar.css'
import Form from 'react-bootstrap/Form';
export default function NavBarrr(props) {
    const [darkMode, setdarkMode] = useState(false)
    const handleSwitch = (event) => {
        const ischecked = event.target.checked
        console.log(ischecked)
        setdarkMode(ischecked?true:false)
        props.handleTheme(darkMode)
    }
    return (
        <Navbar expand="lg" className='bg-body-tertiary' data-bs-theme={darkMode ? 'dark' : 'light'}>
            <Container>
                <Navbar.Brand href="/">GameHub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href='/about' >About</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/action">Action</NavDropdown.Item>
                            <NavDropdown.Item href="/indie">Indie</NavDropdown.Item>
                            <NavDropdown.Item href="/adventure">Adventure</NavDropdown.Item>
                            <NavDropdown.Item href="/rpg">RPG</NavDropdown.Item>
                            <NavDropdown.Item href="/stratergy">Stratergy</NavDropdown.Item>
                            <NavDropdown.Item href="/shooter">Shooter</NavDropdown.Item>
                            <NavDropdown.Item href="/casual">Casual</NavDropdown.Item>
                            <NavDropdown.Item href="/simulation">Simulation</NavDropdown.Item>
                            <NavDropdown.Item href="/puzzle">Puzzle</NavDropdown.Item>
                            <NavDropdown.Item href="/arcade">Arcade</NavDropdown.Item>
                            <NavDropdown.Item href="/platformer">Platformer</NavDropdown.Item>
                            <NavDropdown.Item href="/multiplayer">Multiplayer</NavDropdown.Item>
                            <NavDropdown.Item href="/racing">Racing</NavDropdown.Item>
                            <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
                            <NavDropdown.Item href="/fighting">Fighting</NavDropdown.Item>
                            <NavDropdown.Item href="/family">Family</NavDropdown.Item>
                            <NavDropdown.Item href="/board">Board Games</NavDropdown.Item>
                            <NavDropdown.Item href="/card">Card</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Dark Mode 🌛"
                    style={{ color: darkMode ? 'white' : 'black' }}
                    checked={darkMode}
                    onChange={handleSwitch}
                />
            </Form>
        </Navbar>
    )
}