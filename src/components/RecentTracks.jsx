import React, { useState, useEffect } from "react";

export default function RecentTracks() {
  const [tracks, setTracks] = useState([]);

  const fetchTracks = async () => {
    try {
      const response = await fetch("/api/recentTracks");
      const data = await response.json();
      setTracks(data);
    } catch (error) {
      console.error("Error fetching recent tracks:", error);
    }
  };
  
  useEffect(() => {
    fetchTracks();
    const interval = setInterval(fetchTracks, 1000 * 60 * 3);
    return () => clearInterval(interval);
  }, []);

  if (!tracks.length) {
    return null;
  }

  const getTimeAgo = (timestamp) => {
    const secondsAgo = Math.floor(Date.now() / 1000) - parseInt(timestamp);
    const hours = Math.floor(secondsAgo / 3600);
    const minutes = Math.floor((secondsAgo % 3600) / 60);

    if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    }
    return `${minutes} ${minutes === 1 ? 'min' : 'mins'} ago`;
  };

  return (
    <div className="recentTracksDiv">
      <h2 className="trackTitle">Recent Tracks</h2>
      <p className="tracksDesc">
        Songs that I've listened to recently.
        <a style={{ marginLeft: "5px" }} href="https://open.spotify.com/user/p0ycrj5f31m4rmmtok2zaf7nw" target="_blank" rel="noreferrer">
          My Spotify profile
        </a>
      </p>
      <div className="tracks">
        {tracks.map((track, index) => (
          <a
            key={track.url + index}
            target="_blank"
            rel="noreferrer"
            href={track.url}
            className="trackCard"
          >
            <div className="cardContent">
              <img
                className="trackImage"
                src={track.image}
                alt={`${track.title} album art`}
              />
              <div className="trackInfo">
                <span className="trackName">
                  {track.title.length > 16
                    ? track.title.slice(0, 16) + "..."
                    : track.title}
                </span>
                <span className="artistName">
                  by {track.artist}
                </span>
              </div>
            </div>
            <span className="time">{getTimeAgo(track.date)}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
