import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContextProvider';
import { shorten } from '../Helpers/functions';
import styles from './Cart.module.css'
const Cart = ({ data }) => {
    const {dispatch} = useContext(CartContext)
  const {image, title,price,quantity} = data
    return (
        <div className={styles.container}>
            <img  src={image} alt='product' />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price}</p> 
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                        <button  className={styles.details} style={{backgroundColor:'red',}} onClick={() => dispatch({ type: 'DECREASE_ITEM', payload: data })}>-</button> :
                        <button  className={styles.details} style={{backgroundColor:'red'}} onClick={() => dispatch({ type: 'REMOVE_ITEM',payload: data})}>remove</button>
                }
                <button className={styles.details} style={{backgroundColor:'greenyellow',marginLeft:'15px'}} onClick={() => dispatch({ type: 'INCREASE_ITEM', payload: data })}>+</button>
            </div>
        </div>
    );
};

export default Cart;