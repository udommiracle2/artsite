import footerImg1 from '../images/instagram_4.webp'
import footerImg2 from '../images/instagram_3.webp'
import footerImg3 from '../images/instagram_2.webp'
import footerImg4 from '../images/instagram_1.webp'


const Footer = () => {
    return (
        <div>
            <div className="socials">
                <h1>Follow me on instagram</h1>
                <a href="https://www.instagram.com/"><p>@artstudio</p></a>
                <div className="social-media">
                    <ul>
                        <a href="https://www.instagram.com/"><li><i class="fa-brands fa-instagram"></i></li></a>
                        <a href="https://www.facebook.com/"><li><i class="fa-brands fa-facebook"></i></li></a>
                        <a href="https://pl.pinterest.com/"><li><i class="fa-brands fa-pinterest"></i></li></a>
                        <a href="https://www.tiktok.com/pl-PL//"><li><i class="fa-brands fa-tiktok"></i></li></a>
                    </ul>
                </div>
            </div>
            <div className="image-con">
                <img src={footerImg1} alt="" />
                <img src={footerImg2} alt="" />
                <img src={footerImg3} alt="" />
                <img src={footerImg4} alt="" />
            </div>
            <div className="mainFooter section">
                <ul>
                    <a href=""><li>MAIN</li></a>
                    <a href=""><li>ABOUT ME</li></a>
                    <a href=""><li>OFFER</li></a>
                    <a href=""><li>BLOG</li></a>
                    <a href=""><li>CONTACT</li></a>
                </ul>
                <div className="logo title">
                    <h1>Art Studio</h1>
                </div>
                <div className="footer-writeup">
                    <p>Art Studio</p>
                    <span>artstudio@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
