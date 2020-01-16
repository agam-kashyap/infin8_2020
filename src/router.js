import React from 'react';
import { Router, Route } from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

//Pages
import Home from './components/home';

import GroupDance from './components/sections/GroupDance';
import Euphony from './components/sections/Euphony';
import FacePainting from './components/sections/FacePainting';
import LAN from './components/sections/LANGaming';
import SING from './components/sections/Singing';
import FashionShow from './components/sections/fashion'

const history = createBrowserHistory();
export default (
    <BrowserRouter>
    <Router history={history}>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/groupdance" component={GroupDance}/>
        <Route exact path="/euphony" component={Euphony}/>
        <Route exact path="/facepainting" component={FacePainting}/>
        <Route exact path="/lan" component={LAN}/>
        <Route exact path="/singing" component={SING}/>
        <Route exact path='/fashion' component = {FashionShow} />
    </Switch>
    </Router>
    </BrowserRouter>
)