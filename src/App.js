import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import FacialRecognition from './components/facialrecognition/FacialRecognition';
import addResume from './components/dashboard/addResume';
import SelectDisability from './components/auth/SelectDisability'
import JobDetails from './components/job/JobDetails';
import addJob from './components/job/addJob'
import JobSummary from './components/job/JobSummary';
import JobList from './components/job/JobList'
import FacialRecognitionRegister from './components/facialrecognition/FacialRecognitionRegister'
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
            <Route path='/job/:id' component={JobDetails} />
            <Route path='/addJob' component={addJob} />
            <Route path='/onboarding' component={SelectDisability} />
            <Route path='/resume' component={addResume} />
            <Route path="/list" component={JobList} />
            <Route path="/regface" component={FacialRecognitionRegister} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;