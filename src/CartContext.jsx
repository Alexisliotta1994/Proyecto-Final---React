import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addToCart = (productId) => {
        
        setProducts((prevProducts) => [
            ...prevProducts, productId
        ]);
    };

    return (
        <CartContext.Provider value={{ products, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};