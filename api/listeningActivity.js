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

  const activity = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
      },
    }
  );
  if (!activity.status === 200) {
    return response.json("");
  }
  try {
    const activityData = await activity.json();
    response.json(activityData.is_playing ? activityData : "");
  } catch (e) {
    response.json("");
  }
}
