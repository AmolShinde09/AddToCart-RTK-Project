import React from "react";
import { Link } from "react-router-dom";
import './Home.css';




export const Home = () => {

    return (
        <>
            {/* <!-- main div --> */}
            <div id="main-div">

                {/* <!-- page title --> */}
                <h2>The most searched <span>Luxury</span> cars &nbsp; &nbsp; &nbsp; &nbsp; <Link to="/cart"> <button style={{width:"100px"}}>Cart</button></Link></h2>

                {/* <!-- horizantal line --> */}
                <hr />

                {/* <!-- sub div (product container) --> */}
                <div id="sub-div">

                    {/* <!-- sub chlid div 1 --> */}
                    <div>
                        <img alt="BMW x5" src="Assets/c1.png" />
                        <p>BMW X5</p>
                        <p>₹ 79.90 - 98.50 Lakh<sup>*</sup></p> <br />
                       <button>AddToCart</button>
                    </div>

                    {/* <!-- sub child div 2 --> */}
                    <div>
                        <img alt="Audi A6" src="Assets/c2.png" />
                        <p>Audi A6</p>
                        <p>₹ 61.60 - 66.26 Lakh<sup>*</sup></p> <br />
                        <button>AddToCart</button>
                    </div>

                    {/* <!-- sub child div 3 --> */}
                    <div>
                        <img alt="Land Rover Range Rover Velar" src="Assets/c3.png" />
                        <p>Land Rover Range Rover Velar</p>
                        <p>₹ 89.41 Lakh<sup>*</sup></p> <br />
                        <button>AddToCart</button>
                    </div>

                    {/* <!-- sub child div 4 --> */}
                    <div>
                        <img alt="Mercedes-Benz S-Class" src="Assets/c4.png" />
                        <p>Mercedes-Benz S-Class</p>
                        <p>₹ 1.65 - 1.74 Cr<sup>*</sup></p> <br />
                        <button>AddToCart</button>
                    </div>

                </div>

            
                   
              

            </div>

        </>
    )

}
