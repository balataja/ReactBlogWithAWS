import React, { PropTypes } from 'react';
import BlogEntryShort from './BlogEntryShort';

const BlogEntryList = ({blog}) => {
    return (
        <div>
            {blog.map((blog) => {
                return <BlogEntryShort key={blog.title} title={blog.title} tags={blog.tags} body={blog.body} />
            })}
        </div>
    )
}

BlogEntryList.propTypes = {
    blog: PropTypes.array.isRequired
}

export default BlogEntryList;