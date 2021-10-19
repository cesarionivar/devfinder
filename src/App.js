import React from 'react';

const App = () => {
  return (
    <div className='app'>
      <div className='header'>
        <div className='header__logo'>
          <h1>devfinder</h1>
        </div>
        <div className='header__theme'>
          <button className='btn'>
            <i className='fas fa-adjust'></i>
          </button>
        </div>
      </div>

      <form className='search'>
        <div className='search__icon'>
          <button className='btn'>
            <i className='fas fa-search'></i>
          </button>
        </div>
        <div className='search__input'>
          <input type='text' placeholder='Search Github username...' />
        </div>
        <div className='search__button'>
          <button type='submit' className='btn'>
            Search
          </button>
        </div>
      </form>

      <div className='user'>
        <div className='user__profile'>
          <div className='user__avatar'>
            <img
              src='https://avatars.dicebear.com/api/adventurer/d.svg'
              alt='User Logo'
            />
          </div>
          <div className='user__data'>
            <div className='user__name'>
              <p className='user__nameName'>The Octocat</p>
              <p className='user__nameUsername'>@octocat</p>
            </div>
            <p className='user__createdAt'>Joined 25 Jan 2011</p>
          </div>
        </div>
        <div className='user__info'>
          <p className='user__bio'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus asperiores quibusdam.
          </p>

          <div className='user__features'>
            <div className='repos'>
              <span>Repos</span>
              <p>8</p>
            </div>
            <div className='followers'>
              <span>Followers</span>
              <p>3938</p>
            </div>
            <div className='following'>
              <span>Following</span>
              <p>9</p>
            </div>
          </div>

          <div className='user__links'>
            <p className='location'>
              <i className='fas fa-map-marker-alt'></i> San Francisco
            </p>
            <p className='website'>
              <i className='fas fa-link'></i>{' '}
              <a href='#!'>https://github.blog</a>
            </p>
            <p className='twitter'>
              <i className='fab fa-twitter'></i> <a href='#!'>Not Available</a>
            </p>
            <p className='company'>
              <i className='fas fa-building'></i> @github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
