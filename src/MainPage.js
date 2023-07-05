import {Nav, NavDropdown, Navbar, NavbarBrand} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

export let Homepage=()=>
{
    return(
        <>
        <Navbar bg='success' expand="lg">
            <NavbarBrand href='#home'>React-Bootstrap(Navigation)</NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar" />
            <NavbarCollapse id='basic-navbar'>
                <Nav className='me-auto'>
                    <Nav.Link href='/homepage'>Home</Nav.Link>
                    <Nav.Link href='/createpage'>CREATE</Nav.Link>
                    <Nav.Link href='/printall'>LIST</Nav.Link>
                    <Nav.Link href='/edit'>UPDATE</Nav.Link>
                    <Nav.Link href='/remove'>DELETE</Nav.Link>
                    <NavDropdown id='basic-navbar-dropdown' title=" DROWPDOWN   ">
                        <NavDropdown.Item href='act1'>Action1</NavDropdown.Item>
                        <NavDropdown.Item href='act2'>Action2</NavDropdown.Item>
                        <NavDropdown.Item href=''>Action3</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </NavbarCollapse>

        </Navbar>
        </>
    );
}