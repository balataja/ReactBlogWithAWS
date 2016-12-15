import React from 'react';
import BlogTileComponent from './BlogTileComponent';
import { PageHeader } from 'react-bootstrap';

class BlogTileContainer extends React.Component{
    constructor(props) {
        super(props);

        this.onTileClick = this.onTileClick.bind(this);
    }

    onTileClick() {
        //flip tile for details or open new screen for details
    }

    render() {
        return (
            <div>
                <PageHeader>James M. Balata</PageHeader>
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