import React from 'react';
import useProducts from '../../hooks/useProduct';
import useCart from '../../hooks/useCart';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>{products.length}</h1>
            <h3>{cart.length}</h3>
            <h2>This is order review</h2>
        </div>
    );
};

export default OrderReview;