import React, { useEffect, useState } from "react";
import css from "./Info.module.css";
import { groupNumbers } from "../../utils/groupNumbers";

export function Info({ tweets, followers, cardId }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
    localStorage.setItem(cardId, JSON.stringify(!clicked));
  }

  useEffect(() => {
    const currentClicked = JSON.parse(localStorage.getItem(cardId));
    setClicked(currentClicked);
  }, [cardId]);

  return (
    <div className={css.infoSection}>
      <ul className={css.infoList}>
        <li className={css.infoItem}>{groupNumbers(tweets)} TWEETS</li>
        <li className={css.infoItem}>
          {groupNumbers(followers + clicked)} FOLLOWERS
        </li>
      </ul>
      <button
        className={`${css.button} ${clicked ? css.clicked : null}`}
        onClick={handleClick}
      >
        {clicked ? "Following" : "Follow"}
      </button>
    </div>
  );
}
