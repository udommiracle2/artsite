import React from 'react'
import Painting from '../images/mojepasje_malarstwo.webp'
import Mural from '../images/murale_3.webp'
import Drawings from '../images/mojepasje_rysunek.webp'


const Passion = () => {
    return (
        <div className='passion section' id='passion'>
            <h1>MY PASSION</h1>
            <div className="img-con">
                <div className="passionImg">
                    <a href=""><img src={Painting} alt="" /></a>
                    <p>Painting</p>
                </div>
                <div className="passionImg">
                    <a href=""><img src={Mural} alt="" /></a>
                    <p>Mural</p>
                </div>
                <div className="passionImg">
                    <a href=""><img src={Drawings} alt="" /></a>
                    <p>Drawing</p>
                </div>
            </div>
        </div>
    )
}

export default Passion
