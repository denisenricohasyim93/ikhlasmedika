import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

import Sticky from 'react-stickynode';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

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
      <div className="App" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 700, backgroundColor: 'purple'}}>
        #MENU 3
      </div>
    );
  }
}

export default Main;
