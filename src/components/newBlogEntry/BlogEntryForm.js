import React from 'react';
import Input from '../common/textInput.js';

class BlogEntryForm extends React.Component {
    render (){
        return (
            <div>
                <h1>Blog Entry Form</h1>
                <Input
                    name="title"
                    label="Title"
                    value={this.props.title}
                    onChange={this.props.blogEntry.onChange} />

                <Input
                    name="body"
                    label="Body"
                    value={this.props.body}
                    onChange={this.props.blogEntry.onChange} />

                <Input
                    name="tags"
                    label="tags"
                    value={this.props.tags}
                    onChange={this.props.blogEntry.onChange} />

                <input 
                    type="submit" 
                    value="Save"  
                    className="btn btn-default" 
                    onClick={this.props.onSave} />
            </div>
        )
    }
}

export default BlogEntryForm;