import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

import Sticky from 'react-stickynode';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import RoutesMain from './RoutesMain';

class Main extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isPaneOpen: false,
          isPaneOpenLeft: false
      };
  }

  componentDidMount() {
      Modal.setAppElement(this.el);
  }
  render() {
    return (
    <div>
      <Sticky top='#header' bottomBoundary='#content'>
          <div style={{backgroundColor: 'darkblue', color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: 50, padding: 15}}>
            <div style={{width: '20%', marginLeft: 30}} onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
              #MENU
            </div>
            <div style={{width: '80%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 30}}>
              <Link to='/' style={{color: "white"}}>#LOGOUT</Link>
            </div>
          </div>
      </Sticky>
      <SlidingPane
          isOpen={ this.state.isPaneOpenLeft }
          title='Admin Panel'
          from='left'
          width='250px'
          onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
          <div style={{margin: 30}}><Link to='/Main' style={{color: "black"}}>#MENU1</Link></div>
          <div style={{margin: 30}}><Link to='/Main/Menu2' style={{color: "black"}}>#MENU2</Link></div>
          <div style={{margin: 30}}><Link to='/Main/Menu3' style={{color: "black"}}>#MENU3</Link></div>
      </SlidingPane>
      <RoutesMain/>
    </div>
    );
  }
}

export default Main;
