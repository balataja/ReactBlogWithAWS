import React, { PropTypes } from 'react';
import BlogEntryForm from './BlogEntryForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../../actions/blog-actions';
import {browserHistory} from 'react-router';

class ManageBlogEntryPage extends React.Component {
    constructor() {
        super();

        this.setBlogEntryState = this.setBlogEntryState.bind(this);
        this.saveBlogEntry = this.saveBlogEntry.bind(this);

        this.state = {
            blogEntry: []
        }
    }

    setBlogEntryState(e) {
        var field = e.target.name;
        var value = e.target.value;
        this.state.blogEntry[field] = value;
        return this.setState({blogEntry: this.state.blogEntry});
    }

    saveBlogEntry(e) {
        e.preventDefault();
        //call api
        this.props.actions.addBlog(this.state.blogEntry);
        browserHistory.push('/blog');
    }

    render() {
        return (
            <div>
                <span>ManageBlogEntryPage!</span>
                <BlogEntryForm 
                    blogEntry={this.state.blogEntry} 
                    onChange={this.setBlogEntryState}
                    onSave={this.saveBlogEntry} />
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

ManageBlogEntryPage.PropTypes = {
    blog: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBlogEntryPage);