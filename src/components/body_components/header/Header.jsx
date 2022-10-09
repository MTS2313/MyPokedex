import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import "./style.scss";
function Header() {
    let icon_font = 20
  return (
    <div className="Header">
      <div className="MyMameContent">
        <p className="NameP">Mateus Santana</p>
      </div>
      <span className="HeaderIconsSp">
        <a href="https://github.com/MTS2313" target="_blank"className="gith">
          <AiFillGithub color="#000" fontSize={icon_font}/>
        </a>
        <a href="https://www.linkedin.com/in/mateus-pereira-santana-da-silva-742730210/" target="_blank" className="Linkd">
          <AiOutlineLinkedin color="#000" fontSize={icon_font}/>
        </a>
      </span>
    </div>
  );
}

export default Header;
