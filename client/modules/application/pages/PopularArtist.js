import React, {Component} from 'react'
import {Grid, Row, Col, Thumbnail, Panel} from 'react-bootstrap'

export default class PopularArtist extends Component{

    render() {
        return (
            <Panel bsStyle="primary" header="Popular Artist">
                <Row>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/cats" />
                    </Col>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/city" />
                    </Col>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/animals" />
                    </Col>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/food" />
                    </Col>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/people" />
                    </Col>
                    <Col xs={5} md={2}>
                        <Thumbnail href="#" alt="180x180" src="http://lorempixel.com/180/180/cats" />
                    </Col>
                </Row>
            </Panel>
        )
    }
};