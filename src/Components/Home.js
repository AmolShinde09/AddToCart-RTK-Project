import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import { AddProduct } from "../StoreMange/Reducers/CartSlice";
import { useDispatch } from "react-redux";

export const Home = () => {
        const dispatch = useDispatch();

    return (
        <>
            {/* <!-- main div --> */}
            <div id="main-div">

                {/* <!-- page title --> */}
                <h2>The most searched <span>Luxury</span> cars   <span style={{marginLeft:"500px"}}><Link to="/cart"> <button style={{width:"100px"}}>Cart</button></Link></span></h2>

                {/* <!-- horizantal line --> */}
                <hr />

                {/* <!-- sub div (product container) --> */}
                <div id="sub-div">
                {/* Note: code is static so code duplication here */}
                    {/* <!-- sub chlid div 1 --> */}
                    <div>
                        <img alt="BMW x5" src="Assets/c1.png" />
                        <p>BMW X5</p>
                        <p>₹ 79.90 - 98.50 Lakh<sup>*</sup></p> <br />
                       <button onClick={()=>{dispatch(AddProduct({Name:"BMW i5",Price:79.90})); alert("Product added in Cart checkout")}} >AddToCart</button>
                    </div>

                    {/* <!-- sub child div 2 --> */}
                    <div>
                        <img alt="Audi A6" src="Assets/c2.png" />
                        <p>Audi A6</p>
                        <p>₹ 61.60 - 66.26 Lakh<sup>*</sup></p> <br />
                        <button onClick={()=>{dispatch(AddProduct({Name:"Audi A6",Price:61.65})); alert("Product added in Cart checkout") }} >AddToCart</button>
                    </div>

                    {/* <!-- sub child div 3 --> */}
                    <div>
                        <img alt="Land Rover Range Rover Velar" src="Assets/c3.png" />
                        <p>Land Rover Range Rover Velar</p>
                        <p>₹ 89.41 Lakh<sup>*</sup></p> <br />
                        <button onClick={()=>{dispatch(AddProduct({Name:"Land Rover Range Rover Velar",Price:89.41})); alert("Product added in Cart checkout")}}>AddToCart</button>
                    </div>

                    {/* <!-- sub child div 4 --> */}
                    <div>
                        <img alt="Mercedes-Benz S-Class" src="Assets/c4.png" />
                        <p>Mercedes-Benz S-Class</p>
                        <p>₹ 1.65 - 1.74 Cr<sup>*</sup></p> <br />
                        <button onClick={()=>{dispatch(AddProduct({Name:"Mercedes-Benz S-Class",Price:1.65})); alert("Product added in Cart checkout")}}>AddToCart</button>
                    </div>

                </div>
            </div>

        </>
    )

}
