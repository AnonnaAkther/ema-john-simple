import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15: 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart-style">
             <h3>Order Summery</h3>
             <h5>Items Orderd: {totalQuantity} </h5>
             <br></br>
             <p>Shipping: {shipping}</p>
             <p>tax: {tax.toFixed(2)}</p>
             <p>GrandTotal: {grandTotal.toFixed(2)}</p>
             <p>Total: {total.toFixed(2)}</p>
             {props.children}
        </div>
    );
};

export default Cart;