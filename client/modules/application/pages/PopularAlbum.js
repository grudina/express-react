import React, {Component} from 'react'
import {Grid, Well, Col, Thumbnail, Row, Panel} from 'react-bootstrap'

export default class PopularAlbum extends Component {
    
    render() {
        return (
            <Panel bsStyle="primary" header="Popular Albums">
                <Row>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/animals" />
                    </Col>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/city" />
                    </Col>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/cats" />
                    </Col>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/city" />
                    </Col>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/city" />
                    </Col>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/animals" />
                    </Col>
                </Row>
            </Panel>
        )
    }
}