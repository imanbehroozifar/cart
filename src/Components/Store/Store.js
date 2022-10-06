import React, { useContext } from 'react';
//Context
import { ProductsContext } from '../../Context/ProductContextProvider';
//Components
import Product from '../../Shared/Product';
const Store = () => {

    const products = useContext(ProductsContext)
    return (
        <div style={{display: 'flex', flexWrap:'wrap',justifyContent: 'space-between'}}>
            {products.map(product => <Product
                key={product.id}
                productData={product}
            />)}
        </div>
    );
};

export default Store;