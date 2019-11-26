import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { ToastContainer } from 'react-toastify';

// import Main from './pages/main';
// import Product from './pages/product';

const Routes = () => (
  <BrowserRouter>
    <ToastContainer autoClose={4000} />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
