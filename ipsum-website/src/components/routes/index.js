import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Layout
import MainLayout from '../layout/MainLayout';
import Home from '../home/Home'

function renderWithLayout(Component, Layout, props) {
  return <MainLayout><Component {...props} /></MainLayout>
}

function Routes() {
  
    return (
      <Router>
        <Switch>
            <Route exact path="/" render={(props) => renderWithLayout(Home, props)} />
        </Switch>
      </Router> 
    );
}

export default Routes;
