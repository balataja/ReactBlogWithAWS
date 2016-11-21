import React, { PropTypes } from 'react';
import BlogEntryList from './BlogEntryList.js';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../../actions/blog-actions';

class BlogListContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        }
    }

    render() {
        return (
            <div>
                <PageHeader>James M. Balata</PageHeader>
                <Grid>
                    <Row>
                        <Col md={8}>
                            <BlogEntryList blogs={this.state.blogs} />
                        </Col>
                        <Col md={4}>
                            Sidebar Content Here!
                            To be refactored to it's own component, and moved to a higher level container
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

BlogListContainer.PropTypes = {
    blogs: PropTypes.array.isRequired
}

function mapStateToProps(state, props) {
    return {
        blogs: state.blogs
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(blogActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogListContainer);