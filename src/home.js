import React from 'react';
import './App.css';
import './axiosInstance';

import Header from './components/header/header';
import Introduction from './components/introduction/introduction';
import About from './components/aboutMe/aboutMe';
import Programming from './components/programming/programming';
import Work from './components/recentWork/work';
import Clubs from './components/clubs/clubs';
import Hackathons from './components/hackathons/hackathon';
import Achievement from './components/achievement/achievement';
import Companies from './components/companies/companies';
import StartProject from './components/startProject/startProject';

const App = () => (
    <>
      <Header />
      <Introduction />
      <About />
      <Programming />
      <Work />
      <Clubs />
      <Hackathons />
      <Achievement />
      <Companies />
      <StartProject />
    </>
)


export default App;
