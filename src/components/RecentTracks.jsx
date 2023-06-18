import React, { useState, useEffect } from "react";
export default function RecentTracksSpotify() {
  const [data, setData] = useState([]);
  const fetchUserData = async () => {
    await fetch("/api/recentTracks")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchUserData();
    setInterval(() => {
      fetchUserData();
    }, 1000 * 60 * 3);
  }, []);
  if (data == "") {
    return;
  }

  const remainingTime = (x) => {
    const startTime = new Date(x);
    const currentTime = Date.now();
    const pastTime = currentTime - startTime.getTime();
    const hours = Math.floor(pastTime / (1000 * 60 * 60));
    const minutes = Math.floor((pastTime % (1000 * 60 * 60)) / (1000 * 60)) + 1;

    return `${hours > 0 ? hours + " hours" : ""} ${
      minutes > 0 ? minutes + " mins ago" : ""
    }`;
  };
  return (
    <div className="recentTracksDiv">
      <h2 className="trackTitle"> Recent Tracks</h2>
      <p className="tracksDesc">
        Spotify songs that i've listened to recently.
        <a href="https://open.spotify.com/user/p0ycrj5f31m4rmmtok2zaf7nw">
          My spotify account.
        </a>
      </p>
      <div className="tracks">
        {data?.items &&
          data.items.slice(0, 8).map((item, index) => (
            <a
              target="_blank"
              rel="noreferrer"
              href={item.track.external_urls.spotify}
              className="trackCard"
              key={index}
            >
              <div className="cardContent">
                <img
                  className="trackImage"
                  src={item.track.album.images[1].url}
                  alt="track image"
                />
                <div className="trackInfo">
                  <span
                    className="trackName"
                    href={item.track.external_urls.spotify}
                  >
                    {item.track?.name.length > 16
                      ? item.track?.name.slice(0, 16) + "..."
                      : item.track?.name}
                  </span>
                  <span className="artistName">
                    by {item.track.artists[0].name}
                  </span>
                </div>
              </div>
              <span className="time">{remainingTime(item.played_at)}</span>
            </a>
          ))}
      </div>
    </div>
  );
}
