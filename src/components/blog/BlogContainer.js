import React from 'react'
import BlogComponent from './BlogComponent'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../../actions/blog-actions';

class BlogContainer extends React.Component {
    constructor(props) {
        super(props)

        if (!this.props.blog.items.length > 0) {
            this.props.actions.getBlogs();
        }
    }

    render() {
        // ToDo: Need logic to have spinner, until redux has updated state
        const { isFetching, hasPostedSuccessfully, items } = this.props.blog

        items.forEach(function(element) {
            if (element.titleId === this.props.params.id) {
                this.state = {currentBlog: element}
            }
        }, this)

        return (
            <div>
                {!items.length > 0 && isFetching &&
                    <h2>Loading...</h2>
                }
                {items.length > 0 && !isFetching && this.state.currentBlog != null &&
                    <BlogComponent blog={this.state.currentBlog} />
                }
                
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        blog: state.blog
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(blogActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)