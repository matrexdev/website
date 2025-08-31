import React, { useState, useEffect } from "react";

export default function ListeningActivity() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrentlyScrobbling = async () => {
    try {
      const response = await fetch("/api/listeningActivity");
      const data = await response.json();
      
      if (data && data.track && data.artist) {
        setCurrentTrack(data);
      } else {
        setCurrentTrack(null);
      }
    } catch (error) {
      console.error("Error fetching listening activity:", error);
      setCurrentTrack(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentlyScrobbling();
    const interval = setInterval(fetchCurrentlyScrobbling, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="spotify">
        <img className="spotifyIcon" src="/images/spotify.png" alt="" />
        <div className="song">
          <span className="songInfo">Loading...</span>
        </div>
      </div>
    );
  }

  if (!currentTrack) {
    return (
      <div className="spotify">
        <img className="spotifyIcon" src="/images/spotify.png" alt="" />
        <div className="song">
          <span className="songInfo">Not currently listening</span>
        </div>
      </div>
    );
  }

  return (
    <div className="spotify">
      <img className="spotifyIcon" src="/images/spotify.png" alt="" />
      <div className="song">
        <span className="songInfo">Listening to </span>
        <span className="songDetail">
          {currentTrack.track.length > 16
            ? currentTrack.track.slice(0, 16) + "..."
            : currentTrack.track}
        </span>
        <span className="songInfo"> by </span>
        <span className="songDetail">{currentTrack.artist}</span>
      </div>
    </div>
  );
}
