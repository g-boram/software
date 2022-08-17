import React, { Component } from 'react';
import { Route } from "react-router-dom";

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// Login
import LoginForm from './LoginForm';
// ReactProxy
import ReactProxy from './ReactProxy';
// ApiPostJson
import ApiPostJson from './ApiPostJson';
// SoftwareList
import SoftwareList from './SoftwareToolsManage/SoftwareList';
// SoftwareView
import SoftwareView from './SoftwareToolsManage/SoftwareView';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/SoftwareList' component={SoftwareList} />
        <Route exact path='/SoftwareView/:swtcode' component={SoftwareView} />
        <Route exact path='/reactProxy' component={ReactProxy} />
        <Route exact path='/apiPostJson' component={ApiPostJson} />
        <Footer/>
      </div>
    );
  }
}

export default App;