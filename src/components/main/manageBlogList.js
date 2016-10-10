import React from 'react';
import BlogEntryShort from './BlogEntryShort.js';

export default class manageBlogList extends React.Component{
    constructor() {
        super();
        this.state = {
            blogs: [{title:"First Blog Post!", body:"This is my first blog post. More to come!"},
            {title:"Test Content", body:"This is where more blog content would go."}]
        }
    }

    render() {
        return (
            <div>
                manageBlogList!
                {this.state.blogs.map(function(blog) {
                    return <BlogEntryShort title={blog.title} body={blog.body} />
                })}
            </div>
        )
    }
}