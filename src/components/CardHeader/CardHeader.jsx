import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as HeaderPicture } from "../../img/header.svg";
import heart from "../../img/heart.png";
import heartBot from "../../img/heartBot.png";
import dots from "../../img/dots.png";
import ellipse from "../../img/ellipse.png";
import css from "./CardHeader.module.css";

export function CardHeader({ avatar, user }) {
  return (
    <div className={css.header}>
      <Logo className={css.logo} />
      <HeaderPicture className={css.headerImg} />
      <img src={heart} alt="heart icon" className={css.heartIcon} />
      <img src={heartBot} alt="heart icon" className={css.heartBotIcon} />
      <img src={dots} alt="dots icon" className={css.dotsIcon} />
      <div className={css.separator}></div>
      <div className={css.pictureContainer}>
        <img src={avatar} alt={user} className={css.profilePicture} />
        <img
          src={ellipse}
          alt="white round border"
          className={css.profilePicture}
        />
      </div>
    </div>
  );
}
