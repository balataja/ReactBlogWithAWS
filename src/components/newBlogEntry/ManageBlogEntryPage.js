import React from 'react';
import BlogEntryForm from './BlogEntryForm';

class ManageBlogEntryPage extends React.Component {
    constructor() {
        super();

        this.state = {
            blogEntry: {title: "", body: "", tags: [] }
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

export default ManageBlogEntryPage;