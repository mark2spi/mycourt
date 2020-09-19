import React from 'react';
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './authGuard'
import { Login, Register } from '@/pages/auth'
import Home from '@/pages/home'

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/" component={Home} />
    </Switch>
  );
}

export default App;
