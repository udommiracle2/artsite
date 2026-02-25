import { useState } from "react"


 

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
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Offer</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="hamburger" onClick={toggleMenu}>
                    <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
            </header>

        )
}

export default Header