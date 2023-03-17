const clientId = "yourClientId";
const redirectUri = "http://localhost:3000/";
const accessToken = "yourAccessToken";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      const accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const accessToken = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      })
      .then((jsonResponse) => {
        if (jsonResponse.tracks) {
          return jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          }));
        } else {
          return [];
        }
      });
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    let userId;
    let playlistId;

    return fetch("https://api.spotify.com/v1/me", {
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      })
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({}),
        });
      });
  },
};
