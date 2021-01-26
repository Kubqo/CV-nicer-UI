import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Sidebar from './components/sidebar'

import Home from './sites/home'
import About from './sites/about'
import Skills from './sites/skills'
import Work from './sites/work'
import Contact from './sites/contact'


function App() {
  return (
    <div className="App bg-mainbg h-screen">
      <Sidebar />
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Work" component={Work} />
        <Route path="/Contact" component={Contact} />

        <Route path="">
          <Redirect to="/About" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
