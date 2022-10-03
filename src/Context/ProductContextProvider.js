import React, { createContext, useEffect, useState } from 'react';
//api
import { getProducts } from '../Services/api'
//Context
const ProductContext = createContext();
const ProductContextProvider = ({children}) => {
    const  [products ,setProducts]  =  useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }

        fetchAPI()
    }, [])
         console.log(products)
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;