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
import League from './components/sections/League'
import EDM from './components/sections/EDM'
import Stage from './components/sections/Stage'
import Carnival from './components/sections/Carnival'

const history = createBrowserHistory();
export default (
    <BrowserRouter>
    <Router history={history}>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/groupdance" component={GroupDance}/>
        <Route exact path="/overtone" component={Euphony}/>
        <Route exact path="/facepainting" component={FacePainting}/>
        <Route exact path="/lan" component={LAN}/>
        <Route exact path="/singing" component={SING}/>
        <Route exact path='/fashion' component = {FashionShow} />
        <Route exact path="/lof" component= {League} />
        <Route exact path="/edm" component={EDM} />
        <Route exact path="/stage" component={Stage} />
        <Route exact path="/mela" component={Carnival} />
    </Switch>
    </Router>
    </BrowserRouter>
)