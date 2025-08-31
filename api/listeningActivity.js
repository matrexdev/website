export default async function handler(request, response) {
  try {
    // Fetch the Last.fm user page
    const lastfmResponse = await fetch("https://www.last.fm/user/" + process.env.LASTFM_USER, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!lastfmResponse.ok) {
      return response.status(500).json({ error: "Failed to fetch Last.fm page" });
    }

    const html = await lastfmResponse.text();

    const nowScrobblingMatch = html.match(/<tr[^>]*class="[^"]*chartlist-row--now-scrobbling[^"]*"[^>]*>(.*?)<\/tr>/s);

    if (!nowScrobblingMatch) {
      return response.json(null);
    }

    const trackRow = nowScrobblingMatch[1];

    const trackNameMatch = trackRow.match(
      /<td[^>]*class="[^"]*chartlist-name[^"]*"[^>]*>.*?<a[^>]*title="([^"]*)"[^>]*>([^<]*)<\/a>/s
    );
    const trackName = trackNameMatch ? (trackNameMatch[1] || trackNameMatch[2]).trim() : null;

    const artistMatch = trackRow.match(
      /<td[^>]*class="[^"]*chartlist-artist[^"]*"[^>]*>.*?<a[^>]*title="([^"]*)"[^>]*>([^<]*)<\/a>/s
    );
    const artistName = artistMatch ? (artistMatch[1] || artistMatch[2]).trim() : null;

    if (!trackName || !artistName) {
      return response.json(null);
    }

    return response.json({
      track: trackName,
      artist: artistName,
      isScrobbling: true,
    });
  } catch (err) {
    console.error("Error fetching Last.fm data:", err);
    response.status(500).json({ error: "Internal server error" });
  }
}
