import React from 'react';

export default class newEntryForm extends React.Component{

    render() {
        return (
            <form>
                <h1>Blog Entry Title</h1>
                <label htmlFor="title">Blog Entry Title</label>
                <input type="text"
                    name="blogEntryTitle"
                    placeHolder="Blog Entry Title"
                    value="" />
                <br />
            </form>
        )
    }
}