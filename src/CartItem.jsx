import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const increaseQuantity = () => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: item.id,
        quantity: item.quantity + 1
      }
    });
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: {
          id: item.id,
          quantity: item.quantity - 1
        }
      });
    }
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="item-details">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="quantity">
          <button onClick={decreaseQuantity}>-</button>
          <span>{item.quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <p>Price: ${item.price}</p>
        <p>Total: ${item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
