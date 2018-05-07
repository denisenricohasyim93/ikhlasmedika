import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sticky from 'react-stickynode';

class App extends Component {
  render() {
    return (
    <div>
      <Sticky top='#header' bottomBoundary='#content'>
          <div style={{backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', height: 50, padding: 15}}>
            #Login
            <div style={{marginLeft: 15}}>#Register</div>
          </div>
      </Sticky>
      <div className="App" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 700, backgroundColor: 'purple'}}>
        #1
      </div>
      <div className="App" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 700, backgroundColor: 'yellow'}}>
        #2
      </div>
      <div className="App" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 700, backgroundColor: 'green'}}>
        #3
      </div>
    </div>
    );
  }
}

export default App;
