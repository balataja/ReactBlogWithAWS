import React from 'react';
import { Route, browserHistory, IndexRedirect } from 'react-router';
import App from './App.js';
import Home from './components/main/mainPage.js';
import NewEntry from './components/newBlogEntry/BlogEntryContainer.js';

const routes = (
    <Route path="/" component={App}>
        <IndexRedirect to="/Home"/>
        <Route path="/Home" component={Home}/>
        <Route path="/NewEntry" component={NewEntry}/>
    </Route>
);

export default routes;