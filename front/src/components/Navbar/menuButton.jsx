import React from "react";

export default function MenuButton({
  path,
  icon,
  buttonTitle,
  animationAdder,
  history,
}) {
  return (
    <div className="navbarMenuButtonBox"> <span className={animationAdder(path)}></span>
      <button
        className={"menuButton"}
        onClick={() => {
          history.push(`/${path}`);
        }}
    >
     <img src={`/${icon}.png`} className="navbarButtonIcon" />
        {buttonTitle}
      </button>
     
    </div>
  );
}
