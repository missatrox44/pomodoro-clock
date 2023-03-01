import React from "react";

function Header() {
  return (
    <nav className="top-menu">
      <div className="title-wrapper">
        <a href="https://github.com/missatrox44/pomodoro-clock">
          <span className="menu-title">Pomodoro Timer</span>
        </a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/animatefire">
          <img
            className="avatar"
            src="https://avatars.githubusercontent.com/u/5657761?v=4"
            width="40px;"
            alt=""
          />
        </a>

        <a target="_blank" href="https://missatrox44.github.io/portfolio/">
          <img
            className="avatar"
            src="https://avatars.githubusercontent.com/u/74509058?v=4"
            width="40px;"
            alt=""
          />
        </a>
      </div>
    </nav>
  );
}

export default Header;
