import React from 'react';
import { Router, Route } from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

//Pages
import Home from './components/home';

import Blank from './components/sections/GroupDance';
// import Login from './components/login';
// import Register from './components/register';
// import BookingComponent from './components/bookingcomponent';

const history = createBrowserHistory();
export default (
    <BrowserRouter>
    <Router history={history}>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blank" component={Blank}/>
        {/* <Route exact path="/login" component={Login}/> */}
        {/* <Route exact path="/register" component={Register}/> */}
        {/* <Route exact path="/booking" component={BookingComponent}/> */}
    </Switch>
    </Router>
    </BrowserRouter>
)