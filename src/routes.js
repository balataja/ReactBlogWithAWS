import React from 'react';
import { Route, browserHistory, IndexRedirect } from 'react-router';
import App from './App.js';
import Home from './components/Home.js';
import Blog from './components/blogList/BlogListContainer.js';
import NewEntry from './components/newBlogEntry/BlogEntryContainer.js';

const routes = (
    <Route path="/" component={App}>
        <IndexRedirect to="blog"/>
        <Route path="/home" component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/NewEntry" component={NewEntry}/>
    </Route>
);

export default routes;