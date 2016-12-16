import React from 'react'
import { Row } from 'react-bootstrap';

const BlogComponent = (props) => {
    return (
        <div className="blogtile__wrapper">
            <div className="blogtile" >
                <Row>
                    <h2>{props.blog.info.title}</h2>
                </Row>
                <Row>
                    Posted: {props.blog.postedDate}
                </Row>
                <Row>
                    Tags: {props.blog.info.tags}
                </Row>
                <Row className="blogtile__body" >
                    {props.blog.info.body}
                </Row>
            </div>
        </div>
    )
}

export default BlogComponent