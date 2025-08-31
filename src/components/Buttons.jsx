import GithubIcon from "./icon/Github";
import TwitterIcon from "./icon/TwitterIcon";
import DiscordIcon from "./icon/DiscordIcon";
import InstagramIcon from "./icon/InstagramIcon";
export default function buttons() {
  return (
    <div>
      <h2 className="title">Social</h2>
      <div className="links">
        <a className="button" href="https://github.com/matrexdev" target="_blank" rel="noreferrer">
          <GithubIcon />
          Github
        </a>
        <a className="button" href="https://twitter.com/matrexdev" target="_blank" rel="noreferrer">
          <TwitterIcon />
          Twitter
        </a>
        <a className="button" href="https://discord.gg/mAffaJ2uhD" target="_blank" rel="noreferrer">
          <DiscordIcon />
          Discord
        </a>
        <a className="button" href="https://www.instagram.com/azizyiit/" target="_blank" rel="noreferrer">
          <InstagramIcon />
          Instagram
        </a>
      </div>
    </div>
  );
}
