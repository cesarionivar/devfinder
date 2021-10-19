import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const User = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='user'>
      <div className='user__profile'>
        <div className='user__avatar'>
          <img src={user?.avatar_url} alt='User Logo' />
        </div>
        <div className='user__data'>
          <div className='user__name'>
            <p className='user__nameName'>{user?.name}</p>
            <p className='user__nameUsername'>@{user?.login}</p>
          </div>
          <p className='user__createdAt'>{user?.created_at}</p>
        </div>
      </div>
      <div className='user__info'>
        <p className='user__bio'>{user?.bio}</p>

        <div className='user__features'>
          <div className='repos'>
            <span>Repos</span>
            <p>{user?.public_repos}</p>
          </div>
          <div className='followers'>
            <span>Followers</span>
            <p>{user?.followers}</p>
          </div>
          <div className='following'>
            <span>Following</span>
            <p>{user?.following}</p>
          </div>
        </div>

        <div className='user__links'>
          <p className='location'>
            <i className='fas fa-map-marker-alt'></i> {user?.location}
          </p>
          <p className='website'>
            <i className='fas fa-link'></i> <a href='#!'>{user?.blog}</a>
          </p>
          <p className='twitter'>
            <i className='fab fa-twitter'></i>{' '}
            <a href='#!'>{user?.twitter_username}</a>
          </p>
          <p className='company'>
            <i className='fas fa-building'></i> @{user?.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
