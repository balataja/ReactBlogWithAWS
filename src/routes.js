import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import App from './App.js';
import Home from './components/Home.js';
import Blog from './components/main/manageBlogList.js';
import NewEntry from './components/newBlogEntry/ManageBlogEntryPage.js';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="blog"/>
            <Route path="/home" component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/NewEntry" component={NewEntry}/>
        </Route>
    </Router>
);
