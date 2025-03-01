const appReducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_CART_MODAL':
            return {
                ...state,
                cartModal: true,
            }
        case 'CLOSE_CART_MODAL':
            return {
                ...state,
                cartModal: false,
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        case 'REMOVE_FROM_CART':
            return {
                // Filter out the item from the cart array
                cart: state.cart.filter(item => item.id!== action.payload),
            }
        default:
            return state;
    }
};

export default appReducer;