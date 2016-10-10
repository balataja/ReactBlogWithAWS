import React from 'react';

export default class BlogEntryShort extends React.Component {
    render() {
        return (
            <div>
                {this.props.title}
                {this.props.body}
                <br/>
            </div>
        )
    }
}