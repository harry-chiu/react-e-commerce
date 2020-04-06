import { cartConstants } from '../constants';

const {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
} = cartConstants;

const initialState = {
    productsInCart: JSON.parse(localStorage.getItem('cart')) || [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, productsInCart: [...action.payload] };
        case REMOVE_PRODUCT:
            return { ...state, productsInCart: [...action.payload] };
        default:
            return state;
    }
};