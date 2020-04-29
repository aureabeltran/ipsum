import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Layout
import MainLayout from '../layout/MainLayout';
import SecondLayout from '../layout/SecondLayout';
import Home from '../home/Home'
import ProPlanner from '../proplanner/Proplanner';
import Resources from '../resources/Resources';
import ResourceDetail from '../resources/DetailResource';
import About from '../about/About';

function renderWithLayout(Component, Layout, props) {
  return <MainLayout><Component {...props} /></MainLayout>
}
function renderWithSecondLayout(Component, Layout, props) {
  return <SecondLayout {...Layout}><Component {...props} /></SecondLayout>
}

function Routes() {
  
    return (
      <Router>
        <Switch>
            <Route exact path="/" render={(props) => renderWithLayout(Home, props)} />
            <Route exact path="/proplanner" render={(props) => renderWithSecondLayout(ProPlanner, props)} />
            <Route exact path="/resources" render={(props) => renderWithSecondLayout(Resources, props)} />
              <Route exact path="/resources/resource=:id" render={(props) => renderWithSecondLayout(ResourceDetail, props)} />
            <Route exact path="/about" render={(props) => renderWithSecondLayout(About, props)} />
        </Switch>
      </Router> 
    );
}

export default Routes;
