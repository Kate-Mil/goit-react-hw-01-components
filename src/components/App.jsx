import Profile from "./Profile";
import user from '../user.json';

export const App = () => {
 const {username,tag,location,avatar, stats:{follovers,views,likes}} = user;
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile
    username = {username}
    tag = {tag}
    location = {location}
    avatar = {avatar}
    follovers = {follovers}
    views = {views}
    likes = {likes}
    />
    </div>
  );
};
