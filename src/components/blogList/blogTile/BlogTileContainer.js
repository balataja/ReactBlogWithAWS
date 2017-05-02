import React from 'react';
import BlogTileComponent from './BlogTileComponent';
import {browserHistory} from 'react-router';

class BlogTileContainer extends React.Component{
    constructor(props) {
        super(props);

        this.onTileClick = this.onTileClick.bind(this);
    }

    onTileClick() {
        browserHistory.push('/Blog/' + this.props.blog.titleId);
    }

    render() {
        let body = this.props.blog.info.body;
        let bodyAbbreviated = body.length > 499 ? body.substring(0,499) + "..." : body

        // ToDo: Clicking on 'Tags' should take you to a screen with those tags
        // ToDo: make the title clickable as well to continue reading
        // ToDo: Add pagination

        return (
            <div>
                <BlogTileComponent 
                    key={this.props.blog.titleId}
                    title={this.props.blog.info.title}
                    tags={this.props.blog.info.tags}
                    body={bodyAbbreviated} 
                    postedDate={this.props.blog.postedDate}
                    onTileClick={this.onTileClick} />
            </div>
        )
    }
}

export default BlogTileContainer;