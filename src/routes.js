import React from 'react';
import { Route, browserHistory, IndexRedirect } from 'react-router';
import App from './App.js';
import Blog from './components/blogList/BlogListContainer.js';
import NewEntry from './components/newBlogEntry/BlogEntryContainer.js';

const routes = (
    <Route path="/" component={App}>
        <IndexRedirect to="/Home"/>
        <Route path="/Home" component={Blog}/>
        <Route path="/NewEntry" component={NewEntry}/>
    </Route>
);

export default routes;