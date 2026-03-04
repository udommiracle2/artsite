import React from 'react'
import Painting from '../images/mojepasje_malarstwo.webp'
import Mural from '../images/murale_3.webp'
import Drawings from '../images/mojepasje_rysunek.webp'
import { Link } from 'react-router-dom'

const Passion = () => {
    return (
        <div className='passion section' id='passion'>
            <h1>MY PASSION</h1>
            <div className="img-con">
                <div className="passionImg">
                    <a href=""><Link to="/passion"><img src={Painting} alt="" /></Link></a>
                    <p>Painting</p>
                </div>
                <div className="passionImg">
                    <a href=""><Link to="/passion"><img src={Mural} alt="" /></Link></a>
                    <p>Mural</p>
                </div>
                <div className="passionImg">
                    <a href=""><Link to="/passion"><img src={Drawings} alt="" /></Link></a>
                    <p>Drawing</p>
                </div>
            </div>
        </div>
    )
}

export default Passion
