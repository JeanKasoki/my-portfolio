import { SectionTitle } from "../sectionTitle/section-title";

import "./information.scss";

export function Info(){
  return (
    <div className="infos">
      <SectionTitle text="Linguagens"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Advanced</span>
        <span>🇧🇷 PT-BR - Native</span>
      </div>

      <SectionTitle text="Educação"/>
        <div className="educational-info">
          <span>Bacharel em Sistemas de Informação - Universidade Federal Rural de Amazônia (UFRA)</span>
    </div>
  </div>
  )
}