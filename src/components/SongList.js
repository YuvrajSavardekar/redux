import React from "react";
import { connect } from "react-redux";
import { selectSong } from '../actions/index'
import { Button } from 'semantic-ui-react'
// npm install semantic-ui-react semantic-ui-css

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="righ floated content">
                        <Button
                         primary
                         floated="right"
                         onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </Button>
                    </div>

                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { songs: state.songs };
    // NOTE: in updated version of React we have to write "favoriteTitle: state.favoriteTitle"
    // NOTE: i think they remove that, because after removing that part, website works fine
};

export default connect(
    mapStateToProps,
    { selectSong }
    )(SongList);