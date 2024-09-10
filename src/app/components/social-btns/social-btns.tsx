import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { GitHubIcon } from "../icons/github-icon";

import "./social-btns.scss"

export function SocialBtns(){
  return(
    <div className="social">
      <a href="https://www.instagram.com/jean_link19/">
        <InstaIcon/>
      </a>

      <a href="https://www.linkedin.com/in/jean-carlos-paiva-de-medeiros-2ba87b233/">
        <LinkedinIcon/>
      </a>

      <a href="https://github.com/JeanKasoki">
        <GitHubIcon/>
      </a>
    </div>
  )
}