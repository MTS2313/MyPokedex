import React from "react";
import "./styles.scss";
function InfoBar({ variant,name,value,classSu }) {
  switch (variant) {
    case "typebar":
      return (
        <>
          <div className={`Ibar ${classSu}`}>
            <p className="IbarValue">{value}</p>
          </div>
        </>
      );
      break;
    case "bar2":
      return (
        <>
          <div className="IbarV2">
            <div className="IbarValueName">
              <p className="NameIbar">{name}</p>
            </div>
            <div className="IbarValue">
              <p className="ValueIbar">{value}</p>
            </div>
          </div>
        </>
      );
      break;
    default:
      break;
  }
}

export default InfoBar;
