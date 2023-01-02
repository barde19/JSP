import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Foodlist from './components/Foodlist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Addfood from './components/Addfood';
import Fooddetails from './components/Fooddetails';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/addfood">
            <Addfood/>
          </Route>

          <Route path="/fooddetails:id">
            <Fooddetails/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
};

export default App;