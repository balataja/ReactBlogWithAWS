import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sideBar/SideBarContainer'
import { PageHeader } from 'react-bootstrap';
import { NotificationContainer } from 'react-notifications';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid__wrapper" >
            <div className="grid__sidebar" >
                <SideBar />
            </div>
            <div className="grid__main" >
                <PageHeader></PageHeader>
                {this.props.children}
            </div>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default App;
