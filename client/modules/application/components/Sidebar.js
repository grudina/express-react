import React, {Component} from 'react'

export default class Sidebar extends Component {
    render() {
        let arr = [];
        for(var i = 0; i < 10; i++) {
            arr.push(i)
        }
        return (
            <div className="sidebar">
                <div className="sidebar-header">Album Name</div>
                <div className="sidebar-content">
                    <ul className="songs-list">
                        {arr.map((song, index) => (
                            <li key={index} className="song-element">{`Song #${song}`}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}