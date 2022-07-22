let client_id = process.env.SPOTIFY_CLIENT_ID;
let client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export default function requestAuthorization(): void {
  // your application requests authorization
  var authOptions = {
    method: 'POST',
    headers: {
      Authorization:
        "Basic " + btoa(client_id + ":" + client_secret)
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };

  const response = fetch('https://accounts.spotify.com/api/token' function (error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      var token = body.access_token;
      var options = {
        url: "https://api.spotify.com/v1/users/jmperezperez",
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };
      request.get(options, function (error, response, body) {
        console.log(body);
      });
    }
  });
}
