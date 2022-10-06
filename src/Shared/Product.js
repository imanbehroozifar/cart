import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';
import { shorten , isInCart, quantityCount } from '../Helpers/functions';
import styles from './Product.module.css'
const Product = ({ productData }) => {
    const { image, title, price, id } = productData
    const { state, dispatch } = useContext(CartContext)
    console.log(state)
    return (
        <div className={styles.container}>
            <img src={image} alt='product'/>
            <h3 className={styles.title}>{shorten(title)}</h3>
            <p className={styles.price}>{price} $</p>
            <div className={styles.buttonContainer}>
                <Link to={`/products/${id}`} className={styles.details}>details</Link>
                <div>
                    {quantityCount(state, id) > 1 && <button className={styles.details} style={{backgroundColor:"red",marginRight:'10px'}} onClick={() => dispatch({ type: 'DECREASE_ITEM', payload: productData })}>-</button>}
                    {quantityCount(state, id) === 1 && <button className={styles.details} style={{ backgroundColor: "red" ,marginRight:'10px' }} onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: productData })}>remove</button>}
                    {quantityCount(state, id) > 0 && <span>{quantityCount(state, id)}</span>}
                    
                    {
                        isInCart(state, id) ?
                            <button className={styles.details} style={{ backgroundColor: "greenyellow" , marginLeft:'10px'}} onClick={() => dispatch({ type: 'INCREASE_ITEM', payload: productData })}>+</button> :
                            <button className={ styles.details } style={{backgroundColor:"greenyellow",fontFamily:"cursive"}} onClick={() => dispatch({ type: 'ADD_ITEM' , payload: productData })}>Add To Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;