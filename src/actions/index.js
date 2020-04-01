import constants from '../constants';

const {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
} = constants;

const addProduct = (product, amount) => {
    const productsInCart = JSON.parse(localStorage.getItem('cart')) || [];

    let count = amount;
    while (count--) {
        productsInCart.push(product);
    }
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