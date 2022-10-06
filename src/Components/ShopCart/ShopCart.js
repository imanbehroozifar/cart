import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContextProvider';
import Cart from '../../Shared/Cart';
import  styles from './ShopCart.module.css'

const ShopCart = () => {
    const {state ,dispatch} = useContext(CartContext)
    return (
        <div className={styles.container}>
            <div>
                {state.selectedItems.map((item) => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 &&
                <div className={styles.sidebarRight}>
                        <p><span>Total Items :</span>{ state.itemsCounter}</p>
                        <p><span>Total Payments :</span>{state.total}</p>
                        <div>
                            <button className={styles.details} style={{backgroundColor:'greenyellow'}} onClick={() => dispatch({ type: 'CHECKOUT'})}>Checkout</button>
                            <button className={styles.details} style={{backgroundColor:'red',marginLeft:'30px'}} onClick={() => dispatch({ type: 'CLEAR'})}>Clear</button>
                        </div>
                </div>
            }
            {
                state.checkout && 
                <div style={{margin:"200px 600px"}}>
                        <h3>Checked Out Successfully</h3>
                        <Link className={styles.details} style={{backgroundColor:'greenyellow'}} to='/products'>Bye More</Link>
                </div>
                
            }
            {
                !state.checkout && state.itemsCounter === 0 &&
                <div style={{margin:"200px 630px"}}>
                        <h3>want to Bye?</h3>
                        <Link className={styles.details} style={{backgroundColor:'red'}} to='/products'>Go TO Shop</Link>
                </div>
                
            }
        </div>
    );
};

export default ShopCart;