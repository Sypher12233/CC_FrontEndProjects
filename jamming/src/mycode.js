const accessToken = "";

// export
const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {
      const usingAsync = async () => {
        const client_id = "4ce6335314e34c06a5bcbb079179cbd8";
        const redirect_uri = "http://localhost:8888/callback";

        let url = "https://accounts.spotify.com/authorize";
        url += "?response_type=token";
        url += "&client_id=" + encodeURIComponent(client_id);
        url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
        try {
          const response = await fetch(url, { cache: "no-cache" });
          if (response.ok) {
            // const jsonResponse = await response.json();
            const accessTokenCheck =
              window.location.href.match(/access_token=([^&])/);
            const expiresInCheck =
              window.location.href.match(/expires_in=([^&])/);
            console.log(accessTokenCheck);
          }
        } catch (error) {
          console.log(error);
        }
      };
    }
  },
};
Spotify.getAccessToken();
