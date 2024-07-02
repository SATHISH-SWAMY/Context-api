import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

const Cart = ({ products }) => {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    // Assuming the products data is fetched and passed as props
    const initialCartItems = products.map(product => ({
      ...product,
      quantity: 1
    }));
    
    initialCartItems.forEach(item => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: item
      });
    });
  }, [products, dispatch]);

  return (
    <div className="cart">
      {state.items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-summary">
        <p>Total Quantity: {state.totalQuantity}</p>
        <p>Total Amount: ${state.totalAmount}</p>
      </div>
    </div>
  );
};

export default Cart;
