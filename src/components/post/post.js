import React from 'react';
import Title from './Title';
import HeaderComponent from './Header';
import Paragraph from './Paragraph';
import Image from './Image';
import Author from './Author';
import AppHeader from './AppHeader'
import './style.css';
import { Spin } from 'antd';
import Footer from './Footer';

const Post = (props) => {

    const [post, setPost] = React.useState(null)
    
    React.useEffect(() => {
        window.scrollTo(0,0);
        const id = props.match.params.blogId
        window.axiosInstance.get(`/blog/${id}`)
            .then(res => {
                if(res.data) {
                    setPost(res.data)
                }
            })
    }, [])
 
    const Header = () => (
        post ? <HeaderComponent title = {post.title} subtitle = {post.subTitle} backgroundImage = {post.backgroundImage} /> : null
    )

    const ContentData = post ? 
                <div className="col-md-8 ml-auto mr-auto"> 
                    {post.content.map((item) => {
                        return (
                            <React.Fragment key = {item._id}>
                                <Title heading = {item.heading} />
                                <Paragraph para = {item.paragraph} />
                                {item.img ? <Image url = {item.img} /> : null }
                            </React.Fragment>
                        )
                    })}
                </div> : <Spin style = {{margin:'auto', marginBottom: '5rem'}} size="large" />
    
    return (
        <div>
            <div className="blog-post"> 
                <AppHeader  />
                <Header />
                <div className="main main-raised">
                    <div className="container">
                        <div className="section section-text">
                            <div className="row">
                                {ContentData}
                            </div>
                        </div>
                        <Author />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
    
export default Post;