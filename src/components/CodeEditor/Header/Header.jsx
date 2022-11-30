import { Link } from "react-router-dom";
import React from "react";
import s from "./header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__body}>
        <div className={s.header__right}>
          <Link to="/">
            <div className={s.logo}>
              <img src="/img/mini-logo.svg" alt="logo" />
            </div>
          </Link>

          <nav className={s.nav}>
            <button className={s.ico_btn + " " + "hovered_icon"}>
              <img src="/icons/save.svg" alt="save" />
            </button>
            <button className={s.ico_btn + " " + "hovered_icon"}>
              <img src="/icons/download.svg" alt="download" />
            </button>
            <button className={s.ico_btn + " " + "hovered_icon"}>
              <img src="/icons/feedback.svg" alt="feedback" />
            </button>
            <button className={s.ico_btn + " " + "hovered_icon"}>
              <img src="/icons/translate.svg" alt="translate" />
            </button>
            <button className={s.ico_btn + " " + "hovered_icon"}>
              <img src="/icons/wind1.svg" alt="one window" />
            </button>
            <button className={s.ico_btn + " " + "hovered_icon"}>
              <img src="/icons/wind2.svg" alt="two window" />
            </button>
            <button className={s.ico_btn + " " + "hovered_icon"}>
              <img src="/icons/wind3.svg" alt="three window" />
            </button>
            <button className={s.ico_btn + " " + "hovered_icon"}>
              <img src="/icons/notes.svg" alt="notes" />
            </button>
          </nav>
        </div>
        <h2 className={s.title}>lp cipher 1.0</h2>
        <div className={s.header__left}>
          <button className={s.curr_lang}>JavaScript</button>
          <button className={s.settings_btn}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
