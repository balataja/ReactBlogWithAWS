import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default class BlogTileComponent extends React.Component {
    render() {
        return (
            <div className="blogtile__wrapper">
                <div className="blogtile" >
                    <Row>
                        <h2>{this.props.title}</h2>
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
                        <Button bsStyle="primary">Continue Reading</Button>
                    </Row>
                </div>
            </div>
        )
    }
}