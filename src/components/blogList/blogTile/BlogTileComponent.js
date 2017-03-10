import React from 'react';
import { Row, Button } from 'react-bootstrap';

export default class BlogTileComponent extends React.Component {
    // ToDo: make this look good. Check out http://jamesknelson.com/ for inspiration
    render() {
        return (
            <div className="blogtile__wrapper">
                <div className="blogtile" >
                    <Row>
                        <h2 onClick={this.props.onTileClick} >{this.props.title}</h2>
                    </Row>
                    <Row>
                        Posted: {this.props.postedDate}
                    </Row>
                    <Row>
                        Tags: {this.props.tags}
                    </Row>
                    <Row className="blogtile__body" >
                        {this.props.body}
                    </Row>
                    <Row>
                        <Button onClick={this.props.onTileClick} bsStyle="primary">Continue Reading</Button>
                    </Row>
                </div>
            </div>
        )
    }
}