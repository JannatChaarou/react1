import React from 'react';
import HeadsetImage from './headset1.jpg'; 

function Cards() {
    return (
        <div className="card">
            <img src={HeadsetImage} alt="Wireless Bluetooth Headset" className="card-img" />
            <div className="card-body">
                <h3>Wireless Bluetooth Headset</h3>
            </div>
            <div className="card-footer">
                <p>Shipped in 3-4 days</p>
                <p>$35.99</p>
                <div className="card-buttons">
                    <button className="add-cart-btn">Add to Cart</button>
                    <button className="buy-btn">Buy</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;
