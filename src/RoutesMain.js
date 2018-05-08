import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu1 from './Menu1';
import Menu2 from './Menu2';
import Menu3 from './Menu3';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const RoutesMain = () => (
    <Switch>
      <Route exact path='/Main' component={Menu1}/>
      <Route exact path='/Main/Menu2' component={Menu2}/>
      <Route exact path='/Main/Menu3' component={Menu3}/>
    </Switch>
)

export default RoutesMain
