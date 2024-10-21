v = "s";
auth = "https://accounts.spotify.com/authorize";
clientId = 'aaa1efff87ca4c048ae2c9ca2e61a9c7';
clientSecret = '6e4415c92c884bd188442616360d00e6';
function rep() {
  next();
  setTimeout(function() {
    rep();
  }, 1000);
}
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
    document.getElementById("blockim" + (a+1).toString()).style.backgroundImage = "url('" + results.items[a].album.images[0].url +  "')";
    document.getElementById("blocktxt" + (a+1).toString()).innerHTML = (a+1).toString() + '. ' + results.items[a].name;
    a = a + 1;
  }
  rep();
}
function next() {
  atr = document.getElementById('next').getAttribute('atr');
  bnum = parseInt(atr.substring(1))
  if (bnum != 1 && bnum != 10) {
    document.getElementById('block' + bnum.toString()).style.animation = 'fromcentertoleft 1s 0s 1 normal linear forwards';
    document.getElementById('block' + (bnum+1).toString()).style.animation = 'fromrighttocenter 1s 0s 1 normal linear forwards';
    if (bnum != 9) {
      document.getElementById('block' + (bnum+2).toString()).style.animation = 'fromofftoright 1s 0s 1 normal linear forwards';
    }
    if (bnum != 1) {
      document.getElementById('block' + (bnum-1).toString()).style.animation = 'fromlefttooff 1s 0s 1 normal linear forwards';
    }
    document.getElementById('next').setAttribute('atr', 'b' + (bnum+1).toString())
    document.getElementById('prev').setAttribute('atr', 'b' + (bnum+1).toString())
  }
  if (bnum == 9) {
    document.getElementById('block1').style.animation = 'fromofftoright 1s 0s 1 normal linear forwards';
  }
  if (bnum == 10) {
    document.getElementById('block10').style.animation = 'fromcentertoleft 1s 0s 1 normal linear forwards';
    document.getElementById('block9').style.animation = 'fromlefttooff 1s 0s 1 normal linear forwards';
    document.getElementById('block1').style.animation = 'fromrighttocenter 1s 0s 1 normal linear forwards';
    document.getElementById('block2').style.animation = 'fromofftoright 1s 0s 1 normal linear forwards';
    document.getElementById('next').setAttribute('atr', 'b1');
    document.getElementById('prev').setAttribute('atr', 'b1');
  }
  if (bnum == 1) {
    document.getElementById('block1').style.animation = 'fromcentertoleft 1s 0s 1 normal linear forwards';
    document.getElementById('block10').style.animation = 'fromlefttooff 1s 0s 1 normal linear forwards';
    document.getElementById('block2').style.animation = 'fromrighttocenter 1s 0s 1 normal linear forwards';
    document.getElementById('block3').style.animation = 'fromofftoright 1s 0s 1 normal linear forwards';
    document.getElementById('next').setAttribute('atr', 'b2');
    document.getElementById('prev').setAttribute('atr', 'b2');
  }
}
login();
