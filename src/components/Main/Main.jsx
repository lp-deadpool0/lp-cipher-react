import React from "react";
import s from "./main.module.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.logotype}>
          <img src="/img/logotype.svg" alt="logotype" />
        </div>
        <h1 className={s.title}>Write code right now</h1>
        <div className={s.btns}>
          <Link to="/editor">
            <button className={s.btn}>Create file</button>
          </Link>
          <Link to="/editor">
            <button className={s.btn + " " + s.btn_green}>Open file</button>
          </Link>
        </div>
      </div>
      <footer className={s.footer}>
        <span className={s.footer__text}>lp cipher 2.0</span>
        <span className={s.footer__text}>Made by lp deadpool</span>

        <a
          href="https://t.me/lp_deadpool"
          target="_blank"
          className={s.footer__text + " " + s.footer__mark_text}
          rel="noreferrer">
          Feedback
        </a>
      </footer>
    </div>
  );
};

export default Main;
