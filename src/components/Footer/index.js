import React from 'react';
import { RiGithubLine, RiLinkedinBoxLine, RiTwitterLine } from "react-icons/ri";

function Footer() {
  return(
    <footer className="flex-row">
      <p>Visit me on: </p>
      <ul className="flex-row">
        <li>
          <a href="https://github.com/KennethHollis" target="_blank" rel="noreferrer">
            <RiGithubLine/> GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;