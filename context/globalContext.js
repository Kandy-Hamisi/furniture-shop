'use client'

import appReducer from "@/reducers/AppReducer";
import React, { createContext } from "react";

const GlobalContext = createContext();

const initialState = {
    cartModal: false,
    cart: [],
};

export const GlobalProvider = ({ children }) => {

    const [ state, dispatch ] = React.useReducer(appReducer, initialState);

    const openCartModal = () => {
        dispatch({
            type: "OPEN_CART_MODAL",
        })
    };

    const closeCartModal = () => {
        dispatch({
            type: "CLOSE_CART_MODAL",
        })
    }

    const addToCart = (product) => {
        // add item to cart
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        })
    };

    const removeFromCart = (productId) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: productId,
        })
    } 
    
    return (
        <GlobalContext.Provider value={{
            state,
            openCartModal,
            closeCartModal,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(GlobalContext);
}