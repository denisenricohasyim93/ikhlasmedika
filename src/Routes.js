import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App';
import Login from './Login';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/Login' component={Login}/>
    </Switch>
)

export default Routes
