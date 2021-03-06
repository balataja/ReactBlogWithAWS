import React, { PropTypes } from 'react';
import BlogEntryList from './BlogListComponent.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../../actions/blog-actions';

// ToDo: reorganize Blog components files and folders to something a little more intuitive
// ToDo: figure out a way to import modules/files relatively instead of hardcoded (aliases with webpack)
class BlogListContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            blog: []
        }
    }

    componentDidMount() {
        this.props.actions.readBlogs()
    }

    render() {
        const { isFetching, hasPostedSuccessfully, items } = this.props.blog

        return (
            <div>
                {!isFetching && items.length > 0 &&
                    <BlogEntryList blog={items} />
                }
                {isFetching &&
                    <div>Loading..</div>
                }
            </div>
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