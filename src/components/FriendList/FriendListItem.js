import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendListItem({ id, friendPhoto, name, status }) {
  return (
    <li className={css.item} key={id}>
      <span
        className={`${css.status} ${status ? css.isOnline : css.isOffline}`}
      >
        {status}
      </span>
      <img
        className={css.avatar}
        src={friendPhoto}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friendPhoto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
