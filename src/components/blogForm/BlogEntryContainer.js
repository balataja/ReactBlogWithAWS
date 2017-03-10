import React, { PropTypes } from 'react';
import BlogEntryForm from './BlogEntryForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../../actions/blog-actions';
import {browserHistory} from 'react-router';
import {CreateNotification} from '../../common/notifications'

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
        let input = this.state.blogEntry
        if (!input.title  || !input.body || !input.tags)
        {
            CreateNotification('validationError')
        } else {
            this.props.actions.postBlog(this.state.blogEntry);
            // ToDo: either navigate home or clear input fields on successful post
            //browserHistory.push('/Home');
        }
    }

    render() {
        // ToDo: show spinner/disable submit button while waiting on POST
        return (
            <div>
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