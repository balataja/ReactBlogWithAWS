import React, { PropTypes } from 'react';
import BlogEntryShort from './BlogEntryShort';

const BlogEntryList = ({blogs}) => {
    return (
        <div>
            {blogs.map((blog) => {
                return <BlogEntryShort key={blog.title} title={blog.title} tags={blog.tags} body={blog.body} />
            })}
        </div>
    )
}

BlogEntryList.propTypes = {
    blogs: PropTypes.array.isRequired
}

export default BlogEntryList;