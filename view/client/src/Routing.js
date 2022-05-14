import React from 'react';
import './index.css';
import Home from './pages/Home'
import About from './pages/About'
import Employers from './pages/Employers'
import Contact from './pages/Contact'
import Job from './pages/Job'
import Apply from './pages/Apply'
import Login from './pages/Login'
import Header from './Components/Functional Components/Header'
import { Redirect, Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

function App (){
    return(
    
        <React.Fragment>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Employers" component={Employers} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Job" component={Job} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Apply" component={Apply} />
                <Redirect to="/" />
            </Switch>
        </React.Fragment>
    )
}

export default App;