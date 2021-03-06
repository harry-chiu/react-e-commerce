import { cartConstants } from '../constants';

const {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
} = cartConstants;

const addProduct = (product, amount) => {
    const productsInCart = JSON.parse(localStorage.getItem('cart')) || [];

    productsInCart.push({ ...product, amount });
    localStorage.setItem('cart', JSON.stringify(productsInCart));

    return {
        type: ADD_PRODUCT,
        payload: productsInCart,
    };
};

const removeProduct = (index) => {
    const productsInCart = JSON.parse(localStorage.getItem('cart')) || [];
    productsInCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(productsInCart));

    return {
        type: REMOVE_PRODUCT,
        payload: productsInCart,
    };
};

export default {
    addProduct,
    removeProduct,
};