import React, { PropTypes } from 'react';
import BlogTileContainer from '../blogTile/BlogTileContainer';

const BlogListComponent = ({blog}) => {
    return (
        <div>
            {blog.map((blog) => {
                return <BlogTileContainer blog={blog} />
            })}
        </div>
    )
}

BlogListComponent.propTypes = {
    blog: PropTypes.array.isRequired
}

export default BlogListComponent;