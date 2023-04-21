import { Card } from "../Card/Card";
import css from "./Gallery.module.css";

export function Gallery({ users }) {
  return (
    <ul className={css.gallery}>
      {users.map((user) => (
        <Card userInfo={user} key={user.id} />
      ))}
    </ul>
  );
}
