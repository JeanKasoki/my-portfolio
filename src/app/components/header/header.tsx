import Image from "next/image";

import "./header.scss"

export function Header(){
  return(
    <div className="header">
      <div>
        <h1>Jean Carlos Paiva de Medeiros</h1>
        <h2>Bacharel em Sistemas de Informação</h2>
      </div>
    <Image
      src="/me.jpeg"
      alt="Next.js logo"
      width={325}
      height={310}
      priority
    />
    </div>
  )
}