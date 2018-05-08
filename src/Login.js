import React, { Component } from 'react';
import './App.css';

import Sticky from 'react-stickynode';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
      <RaisedButton backgroundColor={"brown"} disableBackgroundColor={true}>
        <div style={{color: "white"}}>Login</div>
      </RaisedButton>
      </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
