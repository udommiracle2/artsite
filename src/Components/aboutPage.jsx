import aboutWelImg from "../images/zdjecie_3.webp"
import aboutWelImg1 from "../images/zdjecie_4.webp"
import aboutWelImg2 from "../images/zdjecie_5.webp"


const AboutPage = () => {
    return (
        <div className="section aboutPage" >
            <div className="rotate-con">
                <h2 className='rotate'>WELCOME!</h2>
            </div>
            <div className="about-container about">
                <div className="img">
                    <img src={aboutWelImg} alt="" />
                </div>
                <div className="about-writeup">
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet. In eu mi bibendum neque egestas congue quisque. Metus vulputate eu scelerisque felis imperdiet proin. Quis commodo odio aenean sed. Lorem mollis aliquam ut porttitor leo a. Consectetur purus ut faucibus pulvinar elementum. At risus viverra adipiscing at in. Felis bibendum ut tristique et. Risus nullam eget felis eget nunc lobortis mattis. In fermentum et sollicitudin ac orci phasellus egestas tellus. Cursus vitae congue mauris rhoncus aenean. Amet est placerat in egestas. Praesent tristique magna sit amet purus gravida.</p>
                </div>
            </div>
            <div className="about-container2">
                <div className="abt-con">
                    <div className="abt-writeup">
                        <p>Lectus sit amet est placerat in. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Bibendum at varius vel pharetra vel turpis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Phasellus egestas tellus rutrum tellus. Cursus metus aliquam eleifend mi in nulla posuere. Interdum varius sit amet mattis vulputate enim. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Aenean euismod elementum nisi quis eleifend quam. Nunc sed velit dignissim sodales. Morbi tincidunt ornare massa eget egestas purus. Eu non diam phasellus vestibulum lorem sed risus. Porttitor eget dolor morbi non. Scelerisque in dictum non consectetur. Ut enim blandit volutpat maecenas volutpat. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Amet risus nullam eget felis eget. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.
                            Id consectetur purus ut faucibus pulvinar elementum integer enim. Et netus et malesuada fames ac. Eros donec ac odio tempor orci. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Sed velit dignissim sodales ut eu sem integer vitae justo. Amet purus gravida quis blandit turpis cursus in. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Magna sit amet purus gravida quis blandit turpis cursus in. Vitae congue eu consequat ac felis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Enim sed faucibus turpis in eu. Erat velit scelerisque in dictum non consectetur a erat. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac turpis egestas maecenas pharetra. Volutpat blandit aliquam etiam erat velit.</p>
                    </div>
                    <div className="abtImg">
                        <div className="img1">
                            <img src={aboutWelImg1} alt="" />
                        </div>
                        <div className="img2">
                            <img src={aboutWelImg2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
