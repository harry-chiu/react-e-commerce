import { combineReducers } from 'redux';
import constants from '../constants';

const {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
} = constants;

const initialState = {
    productsInCart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, productsInCart: [...action.payload] };
        case REMOVE_PRODUCT:
            return { ...state, productsInCart: [...action.payload] };
        default:
            return state;
    }
};

export default combineReducers({
    cart: cartReducer,
});