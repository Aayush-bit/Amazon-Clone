export const initialState = {
    cart: [],
    user: null
};

export const getCartTotal = (cart) => {
    let totalPrice = 0;
    cart.map((item) => totalPrice += item.price);
    return totalPrice;
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART' :
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case 'REMOVE_FROM_CART' :
            const index = state.cart.findIndex((item) => item.id === action.id);
            let newCart = [...state.cart]

            if (index >= 0) {
                newCart = [].concat(newCart.slice(0, index), newCart.slice(index + 1));
                console.log(newCart)
            }
            else console.warn("Can't remove the item, as it's not in the cart");

            return {
                ...state,
                cart: newCart
            };
        case 'EMPTY_CART': return {
                ...state,
                cart: []
            };
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            };
        default: 
            return state;
    }
}

export default reducer;