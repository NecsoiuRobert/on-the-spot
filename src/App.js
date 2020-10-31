import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import FacialRecognition from './components/facialrecognition/FacialRecognition';
import SelectDisability from './components/auth/SelectDisability'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/facial' component={FacialRecognition} />
            <Route path='/onboarding' component={SelectDisability} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;