import React from 'react';
import { Spin } from 'antd';
import './App.css';
import './axiosInstance';

const Header = React.lazy(() => import('./components/header/header'));
const Introduction = React.lazy(() => import('./components/introduction/introduction'));
const About = React.lazy(() => import ('./components/aboutMe/aboutMe'));
const Programming = React.lazy(() => import('./components/programming/programming'));
const Work = React.lazy(() => import('./components/recentWork/work'));
const Clubs = React.lazy(() => import('./components/clubs/clubs'))
const Hackathons = React.lazy(() => import('./components/hackathons/hackathon'))
const Achievement = React.lazy(() => import('./components/achievement/achievement'));
const Companies = React.lazy(() => import('./components/companies/companies'));
const StartProject = React.lazy(() => import('./components/startProject/startProject'));

const App = () => (
    <>
      <React.Suspense fallback={<Spin style = {{marginLeft: '50%', marginTop:'20%'}} size="large" />}>
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
      </React.Suspense>
    </>
)


export default App;
