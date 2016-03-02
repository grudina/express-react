import React, {Component} from 'react'
import {Grid} from 'react-bootstrap'
import PopularAlbum from './PopularAlbum'
import PopularArtist from './PopularArtist'

export default class Home extends Component {
    render() {
        return (
            <Grid fluid>
                <PopularAlbum />
                <PopularArtist />
            </Grid>
        );
    }
}