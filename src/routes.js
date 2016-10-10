import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App.js';
import Home from './components/Home.js';
import Blog from './components/main/manageBlogList.js';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/home" component={Home}/>
            <Route path="/blog" component={Blog}/>
        </Route>
    </Router>
);
