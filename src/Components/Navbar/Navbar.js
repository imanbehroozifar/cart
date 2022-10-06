import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContextProvider';
import styles from './Navbar.module.css'
const Navbar = () => {
    const { state } = useContext(CartContext)
    return (
        <div className={styles.navbar}>
            <Link className={styles.link} to='/products'>Product</Link>
            <Link className={styles.link} to='/cart'><div >Cart<span>{state.itemsCounter}</span></div></Link>
        </div>
    
    );
};

export default Navbar;