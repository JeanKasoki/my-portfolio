import { ReactIcon } from "../icons/react-icon";
import { NodeIcon } from "../icons/node-icon";
import { JsIcon } from "../icons/javascript-icon";
import { JoomlaIcon } from "../icons/joomla-icon";
import { WordpressIcon } from "../icons/wordpress-icon";
import { HtmlIcon } from "../icons/html-icon";
import { CssIcon } from "../icons/css-icon";

import "./abilities.scss"

export function AbilitiesBtns(){
  return(
    <div className="abilities">
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
        <JsIcon/>
      </a>

      <a href="https://nodejs.org/pt">
        <NodeIcon/>
      </a>

      <a href="https://react.dev/">
        <ReactIcon/>
      </a>

      <a href="https://www.joomla.org/">
        <JoomlaIcon/>
      </a>

      <a href="https://wordpress.com/pt-br/">
        <WordpressIcon/>
      </a>

      <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
        <HtmlIcon/>
      </a>
      
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
        <CssIcon/>
      </a>
    </div>
  )
}