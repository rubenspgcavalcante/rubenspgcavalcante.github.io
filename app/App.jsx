import React from 'react';
import {render} from 'react-dom';

// Import css
import './styles/style.sass';

// Import images
import favicon from "./assets/favicon.ico"

// Import Components
import {AppEnv, store} from "./commons/index";

import {Home} from "./home/index";
import {AboutMe} from './about-me/index';
import {Projects} from './projects/index';
import {Contact} from './contact/index';

// import react router deps
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

const faviconElement = document.querySelector("link[rel='shortcut icon']");
faviconElement.href = favicon;

const router = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={AppEnv}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={AboutMe}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/contact" component={Contact}/>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));