import React, { createContext, useEffect, useState } from 'react';
//api
import { getProducts } from '../Services/api'
//Context
export const ProductsContext = createContext();
const ProductContextProvider = ({children}) => {
    const  [products ,setProducts]  =  useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }

        fetchAPI()
    }, [])
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;