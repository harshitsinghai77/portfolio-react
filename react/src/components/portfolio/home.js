import React from 'react';
import { Spin } from 'antd';
import '../../axiosInstance';

const Header = React.lazy(() => import('./header/header'));
const Introduction = React.lazy(() => import('./introduction/introduction'));
const About = React.lazy(() => import ('./aboutMe/aboutMe'));
const Programming = React.lazy(() => import('./programming/programming'));
const Work = React.lazy(() => import('./recentWork/work'));
const Clubs = React.lazy(() => import('./clubs/clubs'))
const Hackathons = React.lazy(() => import('./hackathons/hackathon'))
const Achievement = React.lazy(() => import('./achievement/achievement'));
const Companies = React.lazy(() => import('./companies/companies'));
const StartProject = React.lazy(() => import('./startProject/startProject'));

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
