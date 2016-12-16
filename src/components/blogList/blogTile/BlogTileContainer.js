import React from 'react';
import BlogTileComponent from './BlogTileComponent';
import {browserHistory} from 'react-router';

class BlogTileContainer extends React.Component{
    constructor(props) {
        super(props);

        this.onTileClick = this.onTileClick.bind(this);
    }

    onTileClick() {
        browserHistory.push('/Blog/' + this.props.blog.title.replace(/\s/g, ''));
    }

    render() {
        return (
            <div>
                <BlogTileComponent 
                    key={this.props.blog.title} 
                    title={this.props.blog.title} 
                    tags={this.props.blog.info.tags}
                    body={this.props.blog.info.body} 
                    postedDate={this.props.blog.postedDate}
                    onTileClick={this.onTileClick} />
            </div>
        )
    }
}

export default BlogTileContainer;