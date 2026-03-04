import React from 'react'
import blogImg from '../images/blog_1.webp'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div className='blog section'>
            <h1>Blog</h1>
            <div className="blog-con">
                <div className="rotate-con">
                    <h2 className='rotate'>Latest Post</h2>
                </div>
                <div className="blog-writecon">
                    <img src={blogImg} alt="" />
                    <div className="blog-write">
                        <h2>What to keep in mind when creating a visual brand identity?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus.</p>
                        <button><Link className="Link" to="/blog/post-one">READ MORE</Link></button>
                    </div>
                </div>
                <div className="btn">
                    <button><Link className="Link" to="/blog">SEE MORE</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Blog