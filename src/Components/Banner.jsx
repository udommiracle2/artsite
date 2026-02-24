import bannerImg from '../images/zdjecie_1.webp';
import '../index.css'

const Banner = () => {
    return (
        <div className='banner section'>
            <div className="banner-writeup">
                <h1>Welcome to my world, <br/>where I create beautiful things</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus.</p>
                <button>Find Out More</button>
            </div>
            <div className="img">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    )
}

export default Banner
