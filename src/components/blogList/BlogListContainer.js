import React, { PropTypes } from 'react';
import BlogEntryList from './BlogListComponent.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../../actions/blog-actions';

class BlogListContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            blog: []
        }
    }

    componentDidMount() {
        this.props.actions.getBlogs()
    }

    render() {
        return (
            <BlogEntryList blog={this.props.blog} />
        )
    }
}

BlogListContainer.PropTypes = {
    blog: PropTypes.array.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogListContainer);