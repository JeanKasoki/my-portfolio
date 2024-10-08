import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { EmailIcon } from "./components/icons/email-icon";
import { SocialBtns } from "./components/social-btns/social-btns";
import { AbilitiesBtns } from "./components/aboutMe/abilities";

import "./components/styles/home.scss"

export default function Home() {
  return (
      <main className="container">
        <Header/>
        <Experience/>
        <AbilitiesBtns/>
        <Info/>

          <div className="buttons">
            <SocialBtns/>
            
          <a className="btn-primary" href="mailto:jeanmyjean@outlook.com">
            Contate-me! 
            <EmailIcon/>
            </a>
        </div>
    </main>
  );
}
