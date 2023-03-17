import "./TrackList.css";
import { Track } from "../Track/Track";
// import { SearchResults } from "../SearchResults/SearchResults";
import React from "react";

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {this.props.tracks.map((song) => {
          return (
            <Track
              key={song.id}
              track={song} // this track prop is a single song received from the map function/method
              onAdd={this.props.onAdd} // onAdd is a method received from SearchResults component that will be used as an event handler to add new songs to playlistTracks state of the app component eventually
              onRemove={this.props.onRemove} // this prop is a method, received from the playlist component. onRemove will be used as an event handler function on the - button to remove a song from the playlist
              isRemoval={this.props.isRemoval} // this prop is received from the playlist component
            />
          );
        })}

        {/* {console.log(this.props.tracks)} */}
        {/* <Track
          trackToRender={this.props.tracks} // passing tracks props received from SearchResults to the Track component
          onAdd={this.props.onAdd} // onAdd is a method from App.js that will be used as an event handler to add songs to playlist eventually
          onRemove={this.props.onRemove} // onRemove will be used as an event handler function on the - button to remove a song from the playlist
          isRemoval={this.props.isRemoval} // is gonna be used as a button to remove a track from the playlist or not
        /> */}
      </div>
    );
  }
}
