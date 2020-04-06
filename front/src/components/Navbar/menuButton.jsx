import React from "react";

export default function MenuButton({
  path,
  icon,
  buttonTitle,
  animationAdder,
  history,
}) {
  return (
    <div className="navbarMenuButtonBox">
     <img src={`/${icon}.png`} className="navbarButtonIcon" />
      <button
        className={"menuButton"}
        onClick={() => {
          history.push(`/${path}`);
        }}
      >
        {buttonTitle}
      </button>
      <span className={animationAdder(path)}></span>
    </div>
  );
}
