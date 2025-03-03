import React, { useState } from 'react'
import '../css/Product.css'
import shoe from '../assets/shoe.png'
import axios from 'axios'

export default function ProductNEW() {

    const RESMIC_API_ENDPOINT = "https://api.resmic.com";

    const makePayment = async() => {

        try {
            const paymentDetails = {
                amount: 35.00, // Amount in USD
                blockchain: ["Ethereum", "Polygon", "Sepolia"],
                token: ["USDT", "USDC", "ETH", "DAI"],
                title: "RobloX Runners Sneakers Payment",
                description: "Secure your RobloX Runners Sneakers Sneakers with a seamless blockchain payment. Pay using ETH, USDT, USDC, or DAI on Ethereum, Polygon, or Sepolia",
                wallet_address: "0x056397760b973BfB921Bc10Be9DA5034B1e921d7",
                blockchain_confirmation: 2,
                redirect_url:`${import.meta.env.VITE_HOST_URL}/success`,
                cancel_url: `${import.meta.env.VITE_HOST_URL}/failed`,
                webhook_url: "adityakaklij11@gmail.com", // Provide webhook endpoint or use email for status updates
            }
            // Initiate the payment session.
            let response = await axios.post(`${RESMIC_API_ENDPOINT}/api/v1/makepayment`, paymentDetails, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': import.meta.env.VITE_RESMIC_PRO_API_SECRET,
                    'x-user-id': import.meta.env.VITE_RESMIC_PRO_USER_ID
                }
            })
            // Redirection to Payment Page.
            if (response.data?.success){
                let payment_url = response.data?.data?.payment_url
                window.location.assign(payment_url)// Opening the payment page
            }
            else{
                alert("Unable to generate payment session.")
            }
            
        } catch (error) {
            console.log("error: " + error);
            alert("Something went wrong")
        }         

    }
    


  return (
    
    <div className='product'>
        <div className="header">
            <div className="product-name">
                <span>RobloX Runners</span>
            </div>
            <div className="product-img">
                <img src={shoe} alt="" />
            </div>
            <div className="product-rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
            <div className="product-info">
                <span>Men's Sneakers, Casual Red Shoes for Men's & Boys</span>
            </div>
            <div className="product-price">
                <span>$35.00</span>
            </div>
        </div>
        <div className="footer">

            <button className="buyNowButton" onClick={makePayment}>
                Buy Now
            </button>
        </div>
    </div>
  )
}
