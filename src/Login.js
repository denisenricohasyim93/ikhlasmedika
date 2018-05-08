import React, { Component } from 'react';
import './App.css';

import Sticky from 'react-stickynode';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
      <div className="App" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 700, backgroundColor: 'white', flexDirection: 'column'}}>
      <img src={require('./assets/logo.png')} style={{width: 250, height: 125}} />
      <TextField
      hintText="Enter your username"
      floatingLabelText="Username"
      />
      <TextField
      hintText="Enter your password"
      floatingLabelText="Password"
      />
      <RaisedButton backgroundColor={"brown"} disableBackgroundColor={true} style={{marginTop: 10}}>
        <div style={{color: "white"}}><Link to='/Main' style={{color: "white"}}>login</Link></div>
      </RaisedButton>
      </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
