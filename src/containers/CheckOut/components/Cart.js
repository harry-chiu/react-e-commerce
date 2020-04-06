import React from 'react';
import { useSelector } from 'react-redux';
import {
    Grid,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    makeStyles,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    fakeImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 80,
        background: '#eeeeee',
    },
    hideInMobile: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));

const Cart = () => {
    const classes = useStyles();
    const { productsInCart } = useSelector(state => state.cart);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {productsInCart.map(({ title, amount, price }, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item className={classes.hideInMobile}>
                                    <div className={classes.fakeImage}>Image</div>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        {title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell align="center">{amount}</TableCell>
                        <TableCell align="center">{price * amount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Cart;