import React from 'react'
import offer1 from "../images/malarstwo_1.webp"
import offer2 from "../images/malarstwo_2.webp"
import offer3 from "../images/malarstwo_3.webp"
import offer4 from "../images/malarstwo_4.webp"
import offer5 from "../images/malarstwo_5.webp"
import offer6 from "../images/murale_1.webp"
import offer7 from "../images/murale_2.webp"
import offer8 from "../images/murale_3.webp"
import offer9 from "../images/murale_4.webp"
import offer10  from "../images/murale_5.webp"
import offer11  from "../images/rysunek_1.webp"
import offer12  from "../images/rysunek_2.webp"
import offer13  from "../images/rysunek_3.webp"
import offer14  from "../images/rysunek_4.webp"
import offer15  from "../images/rysunek_5.webp"

const offer = () => {
    return (
        <div className='offer'>
            <h1>Offer</h1>
            <div className="price-con section">
                <div className="price">
                    <div className="offerImg">
                        <img src={offer1} alt="" />
                    </div>
                    <div className="offer-desc">
                        <div className="offer-writeup">
                            <h1>Painting</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet. In eu mi bibendum neque egestas congue quisque. Metus vulputate eu scelerisque felis imperdiet proin. Quis commodo odio aenean sed. Lorem mollis aliquam ut porttitor leo a. Consectetur purus ut faucibus pulvinar elementum. At risus viverra adipiscing at in. Felis bibendum ut tristique et. Risus nullam eget felis eget nunc lobortis mattis. In fermentum et sollicitudin ac orci phasellus egestas tellus. Cursus vitae congue mauris rhoncus aenean. Amet est placerat in egestas. Praesent tristique magna sit amet purus gravida.</p>
                        </div>
                        <div className="cart">
                            <div className="cart-desc">
                                <span>Acrylic painting</span>
                                <div className="cart-price">$2000</div>
                            </div>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offerTemplate">
                <img id='item1' src={offer2} alt="" />
                <img id='item2' src={offer3} alt="" />
                <img id='item3' src={offer4} alt="" />
                <img id='item4' src={offer5} alt="" />
            </div>


            <div className="price-con section">
                <div className="price">
                    <div className="offerImg2">
                        <img src={offer6} alt="" />
                    </div>
                    <div className="offer-desc2">
                        <div className="offer-writeup">
                            <h1>Murals</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae omnis et fuga quaerat. Laborum animi, repellat itaque suscipit sapiente ratione, provident sequi delectus voluptatum ab excepturi beatae aliquam tempora dolorum</p>
                        </div>
                        <div className="cart">
                            <div className="cart-desc">
                                <span>1 m² of wall painting</span>
                                <div className="cart-price">$390</div>
                            </div>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offerTemplate">
                <img id='item1' src={offer7} alt="" />
                <img id='item4' src={offer8} alt="" />
                <img id='item2' src={offer9} alt="" />
                <img id='item3' src={offer10} alt="" />
            </div>


            <div className="price-con section">
                <div className="price">
                    <div className="offerImg">
                        <img src={offer11} alt="" />
                    </div>
                    <div className="offer-desc">
                        <div className="offer-writeup">
                            <h1>Picture</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet. In eu mi bibendum neque egestas congue quisque. Metus vulputate eu scelerisque felis imperdiet proin. Quis commodo odio aenean sed. Lorem mollis aliquam ut porttitor leo a. Consectetur purus ut faucibus pulvinar elementum. At risus viverra adipiscing at in. Felis bibendum ut tristique et. Risus nullam eget felis eget nunc lobortis mattis. In fermentum et sollicitudin ac orci phasellus egestas tellus. Cursus vitae congue mauris rhoncus aenean. Amet est placerat in egestas. Praesent tristique magna sit amet purus gravida.</p>
                        </div>
                        <div className="cart">
                            <div className="cart-desc">
                                <span>Drawing with crayons or charcoal</span>
                                <div className="cart-price">$450</div>
                            </div>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offerTemplate">
                <img id='item4' src={offer12} alt="" />
                <img id='item2' src={offer13} alt="" />
                <img id='item3' src={offer14} alt="" />
                <img id='item1' src={offer15} alt="" />
            </div>
        </div>
    )
}

export default offer
