import PropTypes from 'prop-types';

export default function FriendListItem({ id, friendPhoto, name, status }) {
  return (
    <li class="item" key={id}>
      <span class="status">{status}</span>
      <img class="avatar" src={friendPhoto} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friendPhoto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
