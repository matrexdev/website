import "./App.css";
import React from "react";
import Buttons from "./components/Buttons";
import Discordstatus from "./components/DiscordStatus";
import Tech from "./components/TechInfo";
import ListeningActivity from "./components/ListeningActivity";
import Footer from "./components/Footer";
import RecentTracks from "./components/RecentTracks";
const user = {
  name: "Matrex",
  imageurl:
    "https://i.pinimg.com/736x/93/fc/b1/93fcb19516c398f60d753dfbddc248aa.jpg",
  imagesize: 90,
};

function App() {
  return (
    <div className="App animation">
      <div className="header">
        <svg
          width="40"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.92 8.04L16.82 9.24C16.5133 9.21333 16.18 9.2 15.82 9.2C15.4733 9.2 15.18 9.20667 14.94 9.22C14.7533 10.6867 14.6333 12.28 14.58 14H13.18C13.1 13.6533 13.06 13.1933 13.06 12.62C13.06 12.0467 13.0733 11.5533 13.1 11.14C13.14 10.7133 13.1867 10.2933 13.24 9.88C13.2933 9.46667 13.32 9.22667 13.32 9.16C13.1333 9.14667 12.6933 9.14 12 9.14C11.3067 9.14 10.8267 9.15333 10.56 9.18C9.01333 11.26 7.58667 12.84 6.28 13.92C4.97333 14.9867 3.66667 15.52 2.36 15.52C1.72 15.52 1.18667 15.3267 0.76 14.94C0.32 14.5533 0.0999999 14.04 0.0999999 13.4C0.0999999 12.1867 1.02 11.08 2.86 10.08C4.71333 9.08 7.10667 8.40667 10.04 8.06C10.3867 7.52667 11.0333 6.70667 11.98 5.6C12.9267 4.48 13.86 3.50667 14.78 2.68C15.18 1.74667 15.4933 1.1 15.72 0.739999C15.96 0.366666 16.1933 0.179999 16.42 0.179999C16.6467 0.179999 16.8333 0.266666 16.98 0.439999C17.1267 0.613333 17.2 0.839999 17.2 1.12C17.2 1.38667 17.0467 1.78667 16.74 2.32C16.4467 2.84 16.14 3.65333 15.82 4.76C15.5 5.85333 15.28 6.88667 15.16 7.86C15.8533 7.86 16.44 7.92 16.92 8.04ZM6.72 12.22C7.82667 11.1667 8.66 10.1667 9.22 9.22C6.98 9.35333 5.24667 9.77333 4.02 10.48C2.80667 11.1867 2.2 11.94 2.2 12.74C2.2 13.0867 2.31333 13.36 2.54 13.56C2.78 13.76 3.09333 13.86 3.48 13.86C4.52 13.86 5.6 13.3133 6.72 12.22ZM13.56 7.86C13.6533 7.40667 13.7733 6.84 13.92 6.16C14.08 5.46667 14.1733 5.06 14.2 4.94C13.56 5.55333 13.1133 6.00667 12.86 6.3C12.6067 6.58 12.16 7.12667 11.52 7.94C11.7467 7.92667 12.02 7.92 12.34 7.92C12.6733 7.90667 12.9467 7.89333 13.16 7.88C13.3733 7.86667 13.5067 7.86 13.56 7.86ZM24.9008 12.52L24.8808 13.36C24.5741 13.3733 24.1541 13.3867 23.6208 13.4C23.0874 13.4133 22.7141 13.4267 22.5008 13.44C22.3008 13.44 22.0208 13.4533 21.6608 13.48C21.0474 13.52 20.4808 13.6 19.9608 13.72C19.3074 13.8667 18.9541 13.94 18.9008 13.94C18.6474 13.94 18.3874 13.7867 18.1208 13.48C17.8674 13.1733 17.7408 12.8733 17.7408 12.58C17.7408 12.02 19.7408 10.3333 23.7408 7.52C23.5674 7.50667 23.1674 7.5 22.5408 7.5C21.9274 7.5 20.8541 7.63333 19.3208 7.9L19.2008 7.22C20.1074 6.67333 21.8008 6.4 24.2808 6.4C24.8008 6.4 25.1674 6.44 25.3808 6.52C25.6074 6.6 25.7208 6.78 25.7208 7.06C25.7208 7.36667 25.5474 7.64667 25.2008 7.9C25.1341 7.95333 25.0208 8.02667 24.8608 8.12C24.7141 8.21333 24.4408 8.4 24.0408 8.68C23.6408 8.96 23.2341 9.25333 22.8208 9.56C22.4208 9.85333 21.9074 10.3 21.2808 10.9C20.6541 11.5 20.0541 12.16 19.4808 12.88C21.3208 12.5867 22.5608 12.44 23.2008 12.44C23.8541 12.44 24.4208 12.4667 24.9008 12.52ZM30.4597 5.52C29.713 5.52 29.3397 5.22 29.3397 4.62C29.3397 4.28667 29.433 4.00667 29.6197 3.78C29.8064 3.55333 30.0464 3.44 30.3397 3.44C30.633 3.44 30.873 3.52667 31.0597 3.7C31.2464 3.87333 31.3397 4.1 31.3397 4.38C31.3397 4.66 31.2597 4.92 31.0997 5.16C30.9397 5.4 30.7264 5.52 30.4597 5.52ZM30.1997 11.42L30.5997 11.76C30.2797 12.3733 29.853 12.9 29.3197 13.34C28.7997 13.7667 28.3264 13.98 27.8997 13.98C27.153 13.98 26.7797 13.46 26.7797 12.42C26.7797 11.1267 27.313 9.44 28.3797 7.36C28.6197 6.90667 28.7597 6.64 28.7997 6.56L29.6597 7.08C29.3797 7.58667 29.033 8.39333 28.6197 9.5C28.2197 10.6067 28.0197 11.32 28.0197 11.64C28.0197 11.9467 28.0864 12.1667 28.2197 12.3C28.353 12.4333 28.513 12.5 28.6997 12.5C29.0597 12.5 29.5597 12.14 30.1997 11.42ZM38.6313 12.52L38.6113 13.36C38.3046 13.3733 37.8846 13.3867 37.3513 13.4C36.8179 13.4133 36.4446 13.4267 36.2313 13.44C36.0313 13.44 35.7513 13.4533 35.3913 13.48C34.7779 13.52 34.2113 13.6 33.6913 13.72C33.0379 13.8667 32.6846 13.94 32.6313 13.94C32.3779 13.94 32.1179 13.7867 31.8513 13.48C31.5979 13.1733 31.4712 12.8733 31.4712 12.58C31.4712 12.02 33.4713 10.3333 37.4713 7.52C37.2979 7.50667 36.8979 7.5 36.2713 7.5C35.6579 7.5 34.5846 7.63333 33.0513 7.9L32.9313 7.22C33.8379 6.67333 35.5313 6.4 38.0113 6.4C38.5313 6.4 38.8979 6.44 39.1113 6.52C39.3379 6.6 39.4513 6.78 39.4513 7.06C39.4513 7.36667 39.2779 7.64667 38.9313 7.9C38.8646 7.95333 38.7513 8.02667 38.5913 8.12C38.4446 8.21333 38.1713 8.4 37.7713 8.68C37.3713 8.96 36.9646 9.25333 36.5513 9.56C36.1513 9.85333 35.6379 10.3 35.0113 10.9C34.3846 11.5 33.7846 12.16 33.2113 12.88C35.0513 12.5867 36.2913 12.44 36.9313 12.44C37.5846 12.44 38.1513 12.4667 38.6313 12.52Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="mainDiv">
        <div className="aboutMe">
          <h2 className="title">About Me</h2>
          <p className="description">
            Hey, I'm a 18 year old with a passion for programming and a beginner
            in the world of software development. I'm currently learning React
            and eager to expand my knowledge and skills. Ever since my
            childhood, I've been captivated by computers, and now I'm channeling
            that interest into learning and exploring the vast realm of coding.
            Despite being new to this field, I'm determined to persevere and
            grow as a developer, embracing the challenges and opportunities that
            lie ahead.
          </p>
          <Discordstatus />
        </div>
        <div className="avatar">
          <img alt="avatar" src={user.imageurl} className="photo" />
          <ListeningActivity />
        </div>
      </div>

      <Tech />

      <Buttons />

      <div className="recentTracks">
        <RecentTracks />
      </div>
      <Footer />
    </div>
  );
}

export default App;
