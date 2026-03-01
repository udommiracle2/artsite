import blogImg from '../images/blog_1.webp'
import blogImg2 from '../images/blog_2.webp'
import blogImg3 from '../images/blog_3.webp'

const blogPage = () => {
    return (
        <div className='blog section blogPage'>
            <h1>Blog</h1>
            <div className="blog-con blog-con2">
                <div className="rotate-con">
                    <h2 className='rotate'>Latest Post</h2>
                </div>
                <div className="blogPage-con" id='blogPage-con'>
                    <img src={blogImg} alt="" />
                    <div className="blog-write">
                        <h2>What to keep in mind when creating a visual brand identity?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus.</p>
                        <button>READ MORE</button>
                    </div>
                </div>


                <div className="blogPage-con">
                    <img src={blogImg2} alt="" />
                    <div className="blog-write">
                        <h2>The magic of colors, or the speech and importance of colors in marketing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus.</p>
                        <button>READ MORE</button>
                    </div>
                </div>

                <div className="blogPage-con">
                    <img src={blogImg3} alt="" />
                    <div className="blog-write">
                        <h2>Abstract painting, to understand or to experience?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi officia amet explicabo rerum, quaerat recusandae!</p>
                        <button>READ MORE</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default blogPage
