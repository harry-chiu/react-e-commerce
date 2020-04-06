import React from 'react';
import { makeStyles } from '@material-ui/core';

import Cart from './Cart';
import PriceTotal from '../../../components/PriceTotal';
import Delivery from './Delivery';
import Payment from './Payment';

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: 720,
        margin: 'auto',
        marginBottom: theme.spacing(2),
    },
    priceTotal: {
        float: 'right',
    },
    content: {
        paddingTop: theme.spacing(4),
    },
    textField: {
        display: 'block',
    },
}));

const Confirmation = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Cart />
            <div className={classes.priceTotal}>
                <PriceTotal />
            </div>
            <div className={classes.content}>
                <Delivery confirmation />
                <Payment confirmation />
            </div>
        </div>
    );
};

export default Confirmation;