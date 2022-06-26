import React from 'react'
import {Navbar, Nav, NavItem,Brand,Button,NavDropdown,Form,FormControl,Badge} from 'react-bootstrap';
import axios from 'axios'

const NavbarAdmin = ()=>{
    const [name,setname] = React.useState([]);
    const TokenLocal = localStorage.getItem("token")
    function  getName(){
        axios
            .get(`https://todo-na-backend.herokuapp.com/api/user?token=${TokenLocal}`)
            .then((res)=>{
                setname(res.data.Name)
            })
    }
    React.useEffect(()=>{
        getName();
    }, []);
    
    return <div>
        <div>
        <Navbar bg="light" variant="light" expand="lg">
                <img href="/" src="logo/512.png" height="45" width="45"  className="mr-sm-2"></img>
                <Navbar.Brand href="/" style={{fontFamily:"Nunito"}} className="mr-sm-3"  >Todo na  [Admin] </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/todo" className="mr-sm-2">all Task Todo</Nav.Link>
                        <Nav.Link href="/done" className="mr-sm-2">all Task Done</Nav.Link>
                        <Nav.Link href="/AllUser" className="mr-sm-2">all User</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown" className="mr-sm-2">
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <h4><Badge className="mr-md-2 mt-md-2" pill variant="dark">Admin : {name}</Badge></h4>
                    <Form inline >
                        <Button href="/" variant="outline-info" className="mr-sm-2" style={{fontFamily:"Nunito"}} onClick={()=>localStorage.clear()} >Logout</Button> 
                    </Form>
                    
                   
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>;
}
export default NavbarAdmin;