import aboutImg from '../images/zdjecie_2.webp';

const About = () => {
    return (
        <div className='about section'>
            <div className="img">
                <img src={aboutImg} alt="" />
            </div>
            <div className="about-writeup">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet. In eu mi bibendum neque egestas congue quisque. Metus vulputate eu scelerisque felis imperdiet proin. Quis commodo odio aenean sed. Lorem mollis aliquam ut porttitor leo a. Consectetur purus ut faucibus pulvinar elementum. At risus viverra adipiscing at in. Felis bibendum ut tristique et. Risus nullam eget felis eget nunc lobortis mattis. In fermentum et sollicitudin ac orci phasellus egestas tellus. Cursus vitae congue mauris rhoncus aenean. Amet est placerat in egestas. Praesent tristique magna sit amet purus gravida.</p>
                <button>Find Out More</button>
            </div>
        </div>
    )
}

export default About