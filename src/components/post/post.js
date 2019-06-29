import React from 'react';
import Title from './Title';
import HeaderComponent from './Header';
import Paragraph from './Paragraph';
import Image from './Image';
import Author from './Author';
import AppHeader from './AppHeader'
import './style.css';
import Footer from './Footer';

const Post = (props) => {

    const [post, setPost] = React.useState(null)
    
    React.useEffect(() => {
        window.scrollTo(0,0);
        window.axiosInstance.get(`/blog/5d163c8a90ed2322c02243bc`)
            .then(res => {
                if(res.data) {
                    console.log(res.data)
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
                            <div key = {item._id}>
                                <Title heading = {item.heading} />
                                {item.paragraph.map((data) => {
                                    return(
                                        <Paragraph key = {data._id} para = {data.para} />
                                    )
                                })}
                                {item.img ? <Image url = {item.img} /> : null }
                            </div>
                        )
                    })}
                </div> : <h1>Loading...</h1>
    
    return (
        <div>
            <div className="blog-post"> 
                <AppHeader />
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