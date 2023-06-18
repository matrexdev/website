import React, { useState, useEffect } from "react";

export default function DiscordStatus() {
  const [data, setData] = useState([]);
  const fetchUserData = () => {
    fetch("https://api.lanyard.rest/v1/users/510677566668013568")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div className="statusDiv">
      <span
        className={`statusIcon ${data?.data?.discord_status || "offline"}`}
      ></span>
      <span className="status">{data?.data?.discord_status || "offline"}</span>
    </div>
  );
}
