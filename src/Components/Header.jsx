// import { useState } from "react"
// // import { Link } from "react-router-dom";



// const Header = () => {
//         const [menuOpen, setMenuOpen] = useState(false);

//         const toggleMenu = () => {
//             setMenuOpen(!menuOpen);
//         };
//         return (
//             <header className="section">
//                 <div className="logo">Art Studio</div>

//                 <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
//                     <ul>
//                         <a href="../Components/aboutPage.jsx"><li>Home</li></a>
//                         {/* {<Link to="/src/Components/aboutPage.jsx" className="about"><li>About Me</li></Link>} */}
//                         <li>About Me</li>
//                         <li>Offer</li>
//                         <li>Blog</li>
//                         <li>Contact</li>
//                     </ul>
//                 </nav>
//                 <i className="fa-solid fa-cart-shopping"></i>
//                 <div className="hamburger" onClick={toggleMenu}>
//                     <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
//                 </div>
//             </header>

//         )
// }

// export default Header



import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="section">
            <div className="logo">Art Studio</div>

            <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
                <ul>
                    {/* Use Link instead of a tags */}
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Me</Link></li>
                    <li><Link to="/passion" onClick={() => setMenuOpen(false)}>Offer</Link></li>
                    <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="hamburger" onClick={toggleMenu}>
                <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
        </header>
    )
}

export default Header;