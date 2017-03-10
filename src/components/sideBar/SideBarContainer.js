import React from 'react'
import { Link } from 'react-router'

class SideBar extends React.Component{
    render() {
        // ToDo: implement proper css for this
        return (
            <div >
                SideBar content will go here.
                <li><Link to="/Blog" activeStyle={{ color: 'red' }}>Blog</Link></li>
                <li><Link to="/AboutMe" activeStyle={{ color: 'red' }}>About Me</Link></li>
                <li><Link to="/Resume" activeStyle={{ color: 'red' }}>Resume</Link></li>
            </div>
        )
    }
}

export default SideBar