import { Experience } from "./components/header/experience/experience";
import { Header } from "./components/header/header";

import "./components/header/styles/home.scss"

export default function Home() {
  return (
      <main className="container">
        <Header/>
        <Experience/>
          <div className="infos">
            <h3>Languages</h3>
          <div className="languages-info">
            <span>🇺🇸 EN - Advanced</span>
            <span>🇧🇷 PT-BR - Native</span>
          </div>

          <h3>Educação</h3>
          <div className="educational-info">
            <span>Bacharel em Sistemas de Informação - Universidade Federal Rural de Amazônia (UFRA)</span>
          </div>
        </div>

          <div className="buttons"></div>
          <div className="social"></div>

          <button>Contate-me!</button>

    </main>
  );
}
