import { createContext, useEffect, useMemo } from "react";
import { productsStore } from "../Store/productsStore";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const { products, fetchProducts, getDiscount, discounts } = productsStore();
    
    useEffect(() => {
        fetchProducts();
        getDiscount();
    },[]);

    const memoizedValue = useMemo(() => ({ 
        products, 
        discounts 
    }), [products, discounts]);

    return (
        <ProductsContext.Provider value={memoizedValue}>
            {children}
        </ProductsContext.Provider>
    )
}