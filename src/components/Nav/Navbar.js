import React from 'react'
import {Navbar, Nav, NavItem,Brand,Button,NavDropdown,Form,FormControl} from 'react-bootstrap';



const NavbarTitle = ()=>{
    return <div>
        <div>
            <Navbar bg="light" variant="light" expand="lg">
               <img href="/" src="logo/512.png" height="45" width="45"  className="mr-sm-2"></img>
                <Navbar.Brand href="/" style={{fontFamily:"Nunito"}} >Todo na</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/contact" className="mr-sm-2">Contact</Nav.Link> 
                    </Nav>
                    <Form inline >
                        <Button href="/signIn" variant="info" className="mr-sm-2" style={{fontFamily:"Nunito"}} >Sign in</Button>{' '}
                        <Button href="/" variant="outline-info" className="mr-sm-2" style={{fontFamily:"Nunito"}} >Login</Button>
                    </Form>
                   
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>;
}
export default NavbarTitle;