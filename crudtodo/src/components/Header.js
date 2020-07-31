import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar, Nav, NavItem, NavbarBrand, Container
} from 'react-bootstrap'
const Header = () => {
    return (
        <Navbar bg="dark" style={{color:"white"}}>
           <Container>
               <NavbarBrand href="/">
             My Team
               </NavbarBrand>
               <Nav>
                   <NavItem>
                       <Link to="/add" className="btn btn-primary">
                           Add User
                       </Link>
                   </NavItem>
               </Nav>
             </Container> 
        </Navbar>
    )
}

export default Header
