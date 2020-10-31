import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import FacialRecognition from './components/facialrecognition/FacialRecognition';
import addResume from './components/dashboard/addResume';
import SelectDisability from './components/auth/SelectDisability'
import Job from './components/job/job';
import addJob from './components/job/addJob'
import listResume from './components/dashboard/listResume'

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
            <Route path='/job' component={Job} />
            <Route path='/addJob' component={addJob} />
            <Route path='/onboarding' component={SelectDisability} />
            <Route path='/resume' component={addResume} />
            <Route path='/listResume' component={listResume} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;