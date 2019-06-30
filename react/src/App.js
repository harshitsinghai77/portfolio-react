import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import './App.css';
import Home from './home';
import ProjectForm from './components/startProject/startProjectForm'
import BlogPost from './components/post/Post'
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CookiesProvider>
          <Route path = "/contact-form" render={(props) => <ProjectForm {...props} title = "Thanks for taking the time to reach out. How can I help you today?" />} ></Route>
          <Route path = "/project-hire" render={(props) => <ProjectForm {...props} title = "Want to discuss a project? I'm most definitely game." />} ></Route>
          <Route path = "/project-collaboration" render={(props) => <ProjectForm {...props} title = "Interested in working together? We should queue up a chat. I’ll buy the coffee." />} ></Route>
          <Route path = "/blog/:blogname/:blogId" component = {BlogPost}  ></Route>
          <Route exact path = "/" component = {Home} ></Route>
        </CookiesProvider>
      </BrowserRouter>
    );
  }
}

export default App;
