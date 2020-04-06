import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    price: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
        fontSize: theme.typography.h6.fontSize,
    },
}));

const PriceTotal = () => {
    const classes = useStyles();
    const [total, setTotal] = useState(0);
    const { productsInCart } = useSelector(state => state.cart);

    useEffect(() => {
        if (productsInCart.length > 0) {
            const reducer = (accumlator, currentValue) => accumlator + currentValue;
            const allPrices = productsInCart.map(product => product.price * product.amount);
            setTotal(allPrices.reduce(reducer));
        }
    }, [productsInCart]);

    return (
        <Typography variant="subtitle1">
            Total <span className={classes.price}>$ {total}</span>
        </Typography>
    );
};

export default PriceTotal;