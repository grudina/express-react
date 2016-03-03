import React, {Component} from 'react'
import {Panel, Row, Thumbnail, Col, Grid} from 'react-bootstrap'
import PopularAlbum from './PopularAlbum'
import PopularArtist from './PopularArtist'

export default class UserList extends Component {
    render() {
        return (
            <Grid fluid>
                <div>
                    <h2>Albums</h2>
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
                </div>
            </Grid>
        )
    }
} 