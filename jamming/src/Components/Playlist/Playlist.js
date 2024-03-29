import "./Playlist.css";
import React from "react";
import { TrackList } from "../TrackList/TrackList";

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />

        {/* <!-- Add a TrackList component --> */}
        <TrackList
          tracks={this.props.playlistTracks} // this prop is received from the app component and being passed down to the TrackList component
          track={this.props.track}
          onRemove={this.props.onRemove} // this prop is a method received from the app component
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}
