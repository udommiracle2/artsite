import React from 'react'
import contactImg from "../images/zdjecie_6.webp"
const contactPage = () => {
    return (
        <div className='contact section'>
            <h1 className="text-center text-[50px] font-semibold">Contact</h1>
            <div className="cont-con flex mt-20 gap-16 ">
                <div className="contImg-con">
                    <div className="rotate-con">
                        <h1 className="rotate text-2xl">Let's talk about your idea</h1>
                    </div>
                    <img className='-mt-[150px]' src={contactImg} alt="" />
                </div>
                <div className="form-con flex flex-col justify-center align-middle px-24">
                    <div className="form-writeup mb-10">
                        <h1 className='text-[40px] font-semibold mb-10'>Ready to take your space to the next level?</h1>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus.</p>
                    </div>
                    <form action="">
                        <label htmlFor="">Name and Surname:</label><br />
                        <input type="text" name="" id="" /><br />
                        <label htmlFor="">E-mail:</label><br />
                        <input type="email" name="" id="" /><br />
                        <label htmlFor="">Message theme:</label><br />
                        <input type="text" name="" id="" /><br />
                        <label htmlFor="">Message:</label><br />
                        <input type="text" name="" id="message" /><br />
                    </form>

                    <button className='w-[50%] mt-4 text-center'>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default contactPage
