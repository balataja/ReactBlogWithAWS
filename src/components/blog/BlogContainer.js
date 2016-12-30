import React from 'react'
import BlogComponent from './BlogComponent'
import { connect } from 'react-redux';

class BlogContainer extends React.Component {
    constructor(props) {
        super(props)

        if (!this.props) {
            //get specific blog from db
            
        } else {
            //get specific blog from redux store
            this.props.blog.forEach(function(element) {
                if (element.titleId === this.props.params.id) {
                    this.state= {currentBlog: element}
                }
            }, this);
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <BlogComponent blog={this.state.currentBlog} />
        )
    }
}

function mapStateToProps(state, props) {
    return {
        blog: state.blog
    }
}

export default connect(mapStateToProps)(BlogContainer)