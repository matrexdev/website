import React, { useState, useEffect } from "react";
export default function ListeningActivity() {
  const [data, setData] = useState([]);
  const fetchUserData = async () => {
    await fetch("/api/listeningActivity")
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
    }, 5000);
  }, []);
  if (data == "") {
    return;
  }
  return (
    <div className="spotify">
      <img className="spotifyIcon" src="/images/spotify.png" alt="" />
      <div className="song">
        <span className="songInfo">Listening to </span>
        <span className="songDetail">
          {data.item?.name.length > 16
            ? data.item?.name.slice(0, 16) + "..."
            : data.item?.name}
        </span>
        <span className="songInfo"> by </span>
        <span className="songDetail">{data.item?.artists[0]?.name}</span>
      </div>
    </div>
  );
}
