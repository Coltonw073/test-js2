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
  url += "&redirect_uri=" + encodeURI('https://coltonw073.github.io/test-js');
  url += "&show_dialog=true";
  url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
  window.location.href = url;
}
console.log("a")
login();
