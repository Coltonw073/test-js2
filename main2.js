auth = "https://accounts.spotify.com/authorize";
clientId = 'aaa1efff87ca4c048ae2c9ca2e61a9c7';
clientSecret = '6e4415c92c884bd188442616360d00e6';
async function login() {
  body = "grant_type=authorization_code";
  body += "&code=" + code;
  body += "&redirect_uri=" + encodeURI('https://coltonw073.github.io/test-js2/test.html');
  body += "&client_id=" + clientId;
  body += "&client_secret=" + clientSecret;
  result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
    },
    body: body
  });
  data = await result.json();
  token = data.access_token;
}
async function req(path) {
  result = await fetch('https://api.spotify.com/v1/' + path, {
    method: 'GET',
    headers: {
      'Authorization' : 'Bearer ' + token
    }
  });
  album = await result.json();
}
login();
console.log(token);
