import React from 'react';
import './navbar.scss';
import Search from './Search/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';

const NavBar = () => {
  return (
    <div className="navbar__container">
      <div className="search__field__container">
        <Search />
      </div>
      <div className="nav__icons">
        <div className="icons">
          <ForumIcon />
          <div className="counter">1</div>
        </div>
        <div className="icons">
          <NotificationsIcon className="red" />
          <div className="counter">5</div>
        </div>
        <div className="icons">
          <SettingsIcon />
        </div>
        <div className="icons">
          <DarkModeIcon />
        </div>
        <div className="icons">
          <img
            src="https://images.unsplash.com/photo-1580711508221-914dc7e7400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"
            alt="avatar"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
