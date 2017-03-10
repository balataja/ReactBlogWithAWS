import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import App from './App'
import BlogList from './components/blogList/BlogListContainer'
import NewEntry from './components/blogForm/BlogEntryContainer'
import Blog from './components/blog/BlogContainer'
import AboutMe from './components/aboutMe/AboutMeContainer'
import Resume from './components/resume/ResumeContainer'

const routes = (
    <Route path="/" component={App}>
        <IndexRedirect to="/Blog"/>
        <Route path="/Blog" component={BlogList}/>
        <Route path="/Blog/:id" component={Blog} />
        <Route path="/NewEntry" component={NewEntry}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Resume" component={Resume}/>
    </Route>
);

export default routes;