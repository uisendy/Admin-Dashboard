import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widget from '../../components/Widgets/Widget';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <NavBar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Home;
