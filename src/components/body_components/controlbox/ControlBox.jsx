import React from "react";
import "./style.scss";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdSearch,
  MdShuffle,
} from "react-icons/md";
function ControlBox({ Next, Back, Search, Shuffle }) {
  let icon_size = 2.5;
  return (
    <div className="ControlBox">
      <div className="PageControlIcons IconsBoxSb">
        <MdNavigateNext
          className="ControlBoxIcons"
          fontSize={`${icon_size}rem`}
          onClick={Next}
        />
        <MdNavigateBefore
          className="ControlBoxIcons"
          fontSize={`${icon_size}rem`}
          onClick={Back}
        />
      </div>
    </div>
  );
}

export default ControlBox;
