import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <div className="contact section">
            <div className="contact-con">
                <h1>Write to me and we will find the perfect solutions for you!</h1>
                <div className="btn">
                    <button><Link className="Link" to="/contact">CONTACT</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Contact
