import React from 'react'
import { Link } from 'react-router'
import logo from '../../logo.svg'
import '../../App.css'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

class SideBar extends React.Component{
    render() {
        // ToDo: implement proper css for this
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/Blog">Reactjs</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem><Link to="/Blog">Blog</Link></NavItem>
                        <NavItem><Link to="/AboutMe">About Me</Link></NavItem>
                        <NavItem><Link to="/Resume">Resume</Link></NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}

export default SideBar