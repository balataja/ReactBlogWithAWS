import React from 'react'
import Input from '../../common/textInput.js'

const BlogEntryForm = (props) => {
    // ToDo: make these look good
    return (
        <div>
            <h1>Blog Entry Form</h1>
            <Input
                name="title"
                label="Title"
                value={props.title}
                onChange={props.onChange} />

            <Input
                name="body"
                label="Body"
                value={props.body}
                onChange={props.onChange} />

            <Input
                name="tags"
                label="Tags"
                value={props.tags}
                onChange={props.onChange} />

            <input 
                type="submit" 
                value="Save"  
                className="btn btn-default" 
                onClick={props.onSave} />
        </div>
    )
}

export default BlogEntryForm;