import React, { Component } from 'react';
import Title from './title';
import Header from './header';
import Content from './content';
import Image from './Image';
import Author from './author';
import './style.css';
import AppBar from '../appBar/appBar'
import JSON from './blogPost.json';
import { Link } from 'react-router-dom';

class Post extends Component {

    state = {
        post : null
    }

    componentDidMount(){
        window.scrollTo(0,0);
        const find = this.props.match.params.postString
        JSON.map((item) => {
            if(item.id === find){
                const post = item
                this.setState({post: post})
            }
        })
    }

    render () {

        const headerData = this.state.post ? 
                <Header title = {this.state.post.title} subtitle = {this.state.post.subtitle} backgroundImage = {this.state.post.backgroundImage} /> 
                    : null
        
        const contentData = this.state.post ? 
                <div className="col-md-8 ml-auto mr-auto"> 
                    {this.state.post.content.map((item) => {
                        return (
                            <div key = {item.id}>
                                <Title heading = {item.heading} />
                                {item.para.map((data) => {
                                    return(
                                        <Content para = {data} />
                                    )
                                })}
                                {item.img ? <Image url = {item.img} /> : null }
                            </div>
                        )
                    })}
                </div> : null

        return (
            <div>
                <AppBar />
                <div className="blog-post"> 
                    {headerData}
                    <div className="main main-raised">
                        <div className="container">
                            <div className="section section-text">
                                <div className="row">
                                    {contentData}
                                </div>
                            </div>
                            <Author />
                        </div>
                    </div>
                </div>
                <footer className="footer ">
                    <div className="container">
                        <nav className="pull-left">
                            <ul>
                                <li>
                                    <Link to="/contact-form">
                                        Contact Me
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/project-hire">
                                        Hire Me
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/project-collaboration">
                                        Collaboration
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="copyright pull-right">
                            &copy;
                            made with <i className="material-icons">favorite</i> by <a href="https://www.creative-tim.com">Harshit Singhai</a>.
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
    
}

export default Post;