import "./Track.css";
import React from "react";
export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    return this.props.isRemoval ? (
      <button className="Track-action" onClick={this.removeTrack}>
        -
      </button>
    ) : (
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    ); // when the onClick event gets fired it will trigger the addTrack method in this (Track) component which will eventually reach the app component's addTrack method and thus adding it to the playlistTracks in it's state;
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {/* <h3><!-- track name will go here --></h3> */}
          <h3>{this.props.track && this.props.track.name}</h3>

          {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
          <p>
            {this.props.track && this.props.track.artist} |{" "}
            {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
