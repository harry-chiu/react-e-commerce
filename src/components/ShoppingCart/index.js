import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Fab,
    Grid,
    Menu,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    makeStyles,
    Avatar,
    ListItemSecondaryAction,
    Typography,
} from '@material-ui/core';
import {
    ShoppingCartOutlined as ShoppingCartOutlinedIcon,
    LocalMall as LocalMallIcon,
    Close as CloseIcon,
    DeleteOutline as DeleteOutlineIcon,
} from '@material-ui/icons';

import actions from '../../actions';

const { removeProduct } = actions;

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        '&:hover': {
            background: '#e40051',
        },
    },
    list: {
        minWidth: 320,
    },
    pointer: {
        cursor: 'pointer',
        '&:hover': {
            color: '#e91e63',
        },
    },
    hint: {
        height: 240,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: theme.typography.subtitle2.fontSize,
    },
    hintIcon: {
        width: 64,
        height: 64,
    },
}));

const ShoppingCart = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const { productsInCart } = useSelector(state => state.cart);

    const handleClick = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const handleRemoveProduct = index => dispatch(removeProduct(index));

    return (
        <>
            <Fab color="secondary" className={classes.fab} onClick={handleClick}>
                <ShoppingCartOutlinedIcon fontSize="large" />
            </Fab>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <List className={classes.list}>
                    <ListItem>
                        <ListItemText primary="Products in Cart" />
                        <ListItemSecondaryAction>
                            <CloseIcon onClick={handleClose} className={classes.pointer} />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    {productsInCart.length === 0 && (
                        <ListItem className={classes.hint}>
                            <Grid container direction="column">
                                <Grid item>
                                    <ShoppingCartOutlinedIcon className={classes.hintIcon} />
                                </Grid>
                                <Grid item>
                                    <ListItemText primary="You don't have any product in cart." />
                                </Grid>
                            </Grid>
                        </ListItem>
                    )}
                    {productsInCart.map(({ title, price }, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>
                                <Avatar>
                                    <LocalMallIcon />
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText primary={title} secondary={`$ ${price}`} />
                            <ListItemSecondaryAction>
                                <DeleteOutlineIcon onClick={() => handleRemoveProduct(index)} className={classes.pointer} />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Menu>
        </>
    );
};

export default ShoppingCart;