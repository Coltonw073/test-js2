auth = "https://accounts.spotify.com/authorize"
clientId = 'aaa1efff87ca4c048ae2c9ca2e61a9c7';
clientSecret = '6e4415c92c884bd188442616360d00e6';
async function login() {
  result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });
  data = await result.json();
  token = data.access_token;
  url = auth;
  url += "?client_id=" + clientId;
  url += "&response_type=code";
  url += "&redirect_uri=" + encodeURI("https://coltonw073.github.io/test-js2/main.html");
  url += "&show_dialog=true";
  url += "&scope=user-library-read user-library-modify user-read-private user-read-email streaming app-remote-control playlist-modify-private playlist-read-private playlist-modify-public playlist-read-collaborative user-top-read user-read-playback-position user-read-recently-played user-follow-read user-follow-modify user-read-currently-playing user-read-playback-state user-modify-playback-state ugc-image-upload";
  window.location.href = url;
}
login();
