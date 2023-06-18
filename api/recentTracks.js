export default async function handler(request, response) {
  const spotifyCookie = process.env.SP_DC;
  const data = await (
    await fetch(
      "https://open.spotify.com/get_access_token?reason=transport&productType=web_player",
      {
        method: "get",
        headers: {
          Cookie: `sp_dc=${spotifyCookie}`,
        },
      }
    )
  ).json();

  const recentTracks = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played",
    {
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
      },
    }
  );
  const recentData = await recentTracks.json();
  response.json(recentData);
}
