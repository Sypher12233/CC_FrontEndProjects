let accessToken = "";
const client_id = encodeURIComponent("b181d011107b42b4af2df69b160347ae");
const redirect_uri = encodeURIComponent("http://localhost:3000/");
// const redirect_uri = encodeURIComponent("http://syphers-jamming-project.surge.sh");
// const baseURL = "https://api.spotify.com/v1";
const scope = encodeURIComponent(
  "user-read-private user-read-email playlist-modify-public"
);

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=${scope}&redirect_uri=${redirect_uri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    let userId;
    return fetch("https://api.spotify.com/v1/me", { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: "POST",
          headers: headers,
          body: JSON.stringify({ name: name }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
              {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ uris: trackUris }),
              }
            );
          });
      });
  },
};

export { Spotify };
