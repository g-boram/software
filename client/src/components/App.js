import React, { Component } from 'react';
import { Route } from "react-router-dom";
import cookie from 'react-cookies';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


// css
import './css/new.css';
// header
import HeaderAdmin from './Header/Header admin';
// footer
import Footer from './Footer/Footer';
// login
import LoginForm from './LoginForm';
// SoftwareList
import SoftwareList from './SoftwareToolsManage/SoftwareList';
// SoftwareView
import SoftwareView from './SoftwareToolsManage/SoftwareView';
// Software
import Software from './SoftwareToolsManage/Software';
// Register
import Register from './Register/Register';
// CompanyInfo
import CompanyInfo from './CompanyInfo/CompanyInfo';
// Project
import Project from './Project/Project';
// DataList
import DataList from './DataList/DataList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    axios.post('/api/LoginForm?type=SessionConfirm', {
      token1 : cookie.load('userid') 
      , token2 : cookie.load('username') 
    })
    .then( response => {
        this.state.userid = response.data.token1
        let password = cookie.load('userpassword')
        if(password !== undefined){
          axios.post('/api/LoginForm?type=SessionSignin', {
            is_Email: this.state.userid,
            is_Token : password
          })
          .then( response => {
            if(response.data.json[0].useremail === undefined){
              this.noPermission()
            }
          })
          .catch( error => {
            this.noPermission()
          });
        }else{
          this.noPermission()
        }
    })
    .catch( response => this.noPermission());
  }

  noPermission = (e) => {
    if(window.location.hash != 'nocookie'){
      this.remove_cookie();
      window.location.href = '/login/#nocookie';
    }
  };

  remove_cookie = (e) => {
    cookie.remove('userid', { path: '/'});
    cookie.remove('username', { path: '/'});
    cookie.remove('userpassword', { path: '/'});
  }

  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path='/' component={LoginForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/SoftwareList' component={SoftwareList} />
        <Route path='/SoftwareView/:swtcode' component={SoftwareView} />
        <Route path='/Software/:swtcode' component={Software} />
        <Route path='/register' component={Register} />
        <Route path='/CompanyInfo' component={CompanyInfo} />
        <Route path='/Project' component={Project} />
        <Route path='/DataList' component={DataList} />
        <Footer/>
      </div>
    );
  }
}

export default App;