import "./SearchResults.css";
import React from "react";
import { TrackList } from "../TrackList/TrackList";

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {/* <!-- Add a TrackList component --> */}
        <TrackList
          tracks={this.props.searchResults} // this prop was received from the app component
          onAdd={this.props.onAdd} // this prop is a method received from the app component which will add a new song to the playlistTracks state of the app component
          isRemoval={false} // this prop is being passed down to the TrackList component from this (SearchResult) component
        />
      </div>
    );
  }
}
