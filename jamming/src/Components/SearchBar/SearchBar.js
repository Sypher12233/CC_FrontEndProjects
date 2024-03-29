import "./SearchBar.css";
import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}


// .then((jsonResponse) => {
//   if (!jsonResponse.tracks) {
//     return [];
//   }
//   return jsonResponse.tracks.items.map((track) => ({
//     id: track.id,
//     name: track.name,
//     artist: track.artists[0].name,
//     album: track.album.name,
//     uri: track.uri,
//   }));
//   // console.log(track),
// });