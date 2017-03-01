import React, { PropTypes } from 'react';
import BlogTileContainer from './blogTile/BlogTileContainer';

const BlogListComponent = ({blog}) => {
    return (
        <div>
            {blog.map(function(b) {
                return <BlogTileContainer key={b.titleId} blog={b} />
            })}
        </div>
    )
}

BlogListComponent.propTypes = {
    blog: PropTypes.array.isRequired
}

export default BlogListComponent;