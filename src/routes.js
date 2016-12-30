import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import App from './App'
import Home from './components/main/mainPage'
import NewEntry from './components/blogForm/BlogEntryContainer'
import Blog from './components/blog/BlogContainer'

const routes = (
    <Route path="/" component={App}>
        <IndexRedirect to="/Home"/>
        <Route path="/Home" component={Home}/>
        <Route path="/NewEntry" component={NewEntry}/>
        <Route path="/Blog/:id" component={Blog} />
    </Route>
);

export default routes;