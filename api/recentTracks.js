export default function handler(request, response) {
  const http = require("http");
  let [key, user] = [process.env.LASTFM_API, process.env.LASTFM_USER];
  let endpoint = "http://ws.audioscrobbler.com/2.0/";
  let recentTracksURL = `${endpoint}?method=user.getrecenttracks&user=matrex_03&limit=8&api_key=${key}&format=json`;
  http.get(recentTracksURL, (res) => {
    let body = "";
    res.on("data", (chunk) => {
      body += chunk;
    });
    res.on("end", () => {
      let data = JSON.parse(body);
      let recentTracks = data.recenttracks.track
        .map((track) => {
          return {
            artist: track.artist["#text"],
            title: track.name,
            album: track.album["#text"],
            image: track.image[2]["#text"],
            url: track.url,
            date: track.date?.uts,
          };
        })
        .filter((track) => {
          return track.date;
        });
      response.status(200).json(recentTracks);
    });
  });
}
