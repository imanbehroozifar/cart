import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
//Context 
import { ProductsContext } from '../../Context/ProductContextProvider';
import styles from './ProductDetails.module.css'
const ProductDetails = () => {
    const params = useParams()
    const data = useContext(ProductsContext)
    const id = params.id
    const product = data[id-1]
    const  {image,title,price,category,description} = product
    return (
        <div className={styles.container}>
            <img src={image} alt='product' />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category:</span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <Link className={styles.details} to='/products'>back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;