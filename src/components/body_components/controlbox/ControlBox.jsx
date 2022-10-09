import React from "react";
import "./style.scss";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdSearch,
  MdShuffle,
} from "react-icons/md";
function ControlBox({Next,Back,Search,Shuffle}) {
    let icon_size = 2
  return (
    <div className="ControlBox">
      <div className="iconsContent">
        <div className="PageControlIcons IconsBoxSb">
          <MdNavigateBefore className="ControlBoxIcons" fontSize={`${icon_size}rem`} onClick={Back}/>
          <MdNavigateNext className="ControlBoxIcons" fontSize={`${icon_size}rem`} onClick={Next}/>
        </div>
        <div className="ListToolsIcons IconsBoxSb">
          <MdSearch className="ControlBoxIcons" fontSize={`${icon_size}rem`} onClick={Search}/>
          <MdShuffle className="ControlBoxIcons" fontSize={`${icon_size}rem`} onClick={Shuffle}/>
        </div>
      </div>
    </div>
  );
}

export default ControlBox;
