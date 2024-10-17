v = "s";
auth = "https://accounts.spotify.com/authorize";
clientId = 'aaa1efff87ca4c048ae2c9ca2e61a9c7';
clientSecret = '6e4415c92c884bd188442616360d00e6';
async function login() {
  queryString = window.location.search;
  urlParams = new URLSearchParams(queryString);
  code = urlParams.get('code');
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
  result = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10&offset=0', {
    method: 'GET',
    headers: {
      'Authorization' : 'Bearer ' + token
    }
  });
  results = await result.json();
  a = 0;
  while (a < 10) {
    document.getElementById('block' + (a+1).toString()).children[0].innerHTML = (a+1).toString() + ". " + results.items[a].name
    a = a + 1;
  }
}
login();
