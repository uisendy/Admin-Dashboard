import React from 'react';
import './sidebar.scss';
import { nanoid } from '@reduxjs/toolkit';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ForumIcon from '@mui/icons-material/Forum';
import ArticleIcon from '@mui/icons-material/Article';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const sidebarMenus = [
  {
    id: nanoid(8),
    title: 'Main',
    subMenus: [
      {
        id: nanoid(8),
        item: 'Dashboard',
        icon: <DashboardIcon />,
      },
      {
        id: nanoid(8),
        item: 'Users',
        icon: <PeopleIcon />,
      },
      {
        id: nanoid(8),
        item: 'Products',
        icon: <CategoryIcon />,
      },
      {
        id: nanoid(8),
        item: 'Orders',
        icon: <LocalShippingIcon />,
      },
    ],
  },
  {
    id: nanoid(8),
    title: 'Stats',
    subMenus: [
      {
        id: nanoid(8),
        item: 'Activities',
        icon: <QueryStatsIcon />,
      },
      {
        id: nanoid(8),
        item: 'Logs',
        icon: <ArticleIcon />,
      },
      {
        id: nanoid(8),
        item: 'Messages',
        icon: <ForumIcon />,
      },
    ],
  },
  {
    id: nanoid(8),
    title: 'Account',
    subMenus: [
      {
        id: nanoid(8),
        item: 'Profile',
        icon: <AdminPanelSettingsIcon />,
      },
      {
        id: nanoid(8),
        item: 'Settings',
        icon: <SettingsIcon />,
      },
      {
        id: nanoid(8),
        item: 'Logout',
        icon: <LogoutIcon />,
      },
    ],
  },
];

const Link = ({ menu }) => {
  return (
    <li key={menu.id} className="menu__links">
      <p className="menu__title">{menu.title}</p>
      <ul>
        {menu.subMenus.map((submenu) => (
          <li key={submenu.id} className="submenu__links">
            <span className="icons">{submenu.icon}</span>
            <span className="menus">{submenu.item}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Engrade</span>
      </div>
      <div className="center">
        <ul>
          {sidebarMenus.map((menu) => (
            <Link menu={menu} />
          ))}
        </ul>
      </div>
      <div className="bottom">toggle theme</div>
    </div>
  );
};

export default Sidebar;
