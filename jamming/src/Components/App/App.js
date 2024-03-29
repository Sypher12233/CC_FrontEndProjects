import "./App.css";
import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import { Spotify } from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        // this array of objects will be a mockup for the search result returned from the spotify API
        {
          name: "Example Search Result 1",
          artist: "Example Search Artist 1",
          album: "Example Search Album 1",
          id: 1,
        },
      ],
      playlistName: "Example Playlist Name",
      playlistTracks: [
        {
          name: "Example Playlist Track 1",
          artist: "Example Playlist Artist 1",
          album: "Example Playlist Album 1",
          id: 111,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // addTrack is gonna be used as an event handler which will be placed in the + button inside the searchResult list
  addTrack(track) {
    const foundTrack = this.state.playlistTracks.find(
      (playlistTrack) => playlistTrack.id === track.id
    );
    const newPlaylistTracks = this.state.playlistTracks.concat(track);
    foundTrack
      ? console.log("Track already exists in the playlist")
      : this.setState({ playlistTracks: newPlaylistTracks });
  }

  // remove track will be used as an event handler to remove a song from the playlist when clicked
  removeTrack(track) {
    // the below .filter method will remove the track (which is passed as an argument) from the playlistTracks and return the rest of the tracks
    const newPlaylistTracks = this.state.playlistTracks.filter(
      (playlistTrack) => playlistTrack.id !== track.id
    );
    this.setState({ playlistTracks: newPlaylistTracks }); // this will update the playlistTrack state to the filtered newPlaylistTracks
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    const playlistName = this.state.playlistName;
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      });
    });
  }

  search(term) {
    Spotify.search(term).then((results) => {
      this.setState({ searchResults: results });
      console.log(results);
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar onSearch={this.search} />

          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />

            {/* <!-- Add a Playlist component --> */}
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
