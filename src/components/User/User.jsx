import { Component } from 'react';
import css from './User.module.css';
import imgUser from '../../images/Hansel.svg';

export class User extends Component {
  render() {
    const usersFollow =
      String(this.props.followers).slice(0, 3) +
      ',' +
      String(this.props.followers).slice(3);

    return (
      <div className={css.User}>
        <span className={css.Line}></span>
        <div className={css.Userimg}>
          <img src={imgUser} alt="user pic" className={css.UserSvg} />
        </div>
        <p className={css.Media}>777 tweets</p>
        <p className={css.Media}>{usersFollow} followers</p>

        <button
          onClick={this.props.onFollowClick}
          className={this.props.isFollowed ? css.Active : css.Button}
          type="button"
          aria-label="following button"
        >
          {this.props.isFollowed ? 'Following' : 'Follow'}
        </button>
      </div>
    );
  }
}

