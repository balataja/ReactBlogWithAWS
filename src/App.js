import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';
import SideBar from './components/sideBar/SideBarContainer'
import { PageHeader } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid__wrapper" >
            <div className="grid__sidebar" >
                <SideBar />
            </div>
            <div className="grid__main" >
                <PageHeader>James M. Balata</PageHeader>
                {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
