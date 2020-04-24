import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import {
    Grid,
    Card,
    Button,
    Divider,
    Typography,
    makeStyles,
    TextField,
    IconButton,
    Snackbar,
} from '@material-ui/core';
import {
    Add as AddIcon,
    Remove as RemoveIcon,
    Done as DoneIcon,
} from '@material-ui/icons'

import { cartActions } from '../../actions';
import products from '../../database/products';
import ProductCard from '../../components/ProductCard';

const { addProduct } = cartActions;

const useStyles = makeStyles(theme => ({
    fakeImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 720,
        background: '#eeeeee',
        fontSize: theme.typography.h4.fontSize,
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('sm')]: {
            height: 240,
        },
    },
    verticalMargin: {
        margin: theme.spacing(2, 0),
    },
    content: {
        padding: theme.spacing(2),
    },
    price: {
        color: '#e91e63',
    },
    textField: {
        width: 56,
        '& > .MuiInputBase-root > .MuiInputBase-input': {
            textAlign: 'center',
        },
    },
    button: {
        '&:hover': {
            background: '#e40051',
        },
    },
    navLink: {
        textDecoration: 'none',
    },
    green: {
        color: theme.palette.success.light,
    },
}));

const ProductDetail = () => {
    const classes = useStyles();
    const { id } = useParams();
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
    const [recommendProducts, setRecommendProducts] = useState([]);
    const [open, setOpen] = useState(false);

    const product = products.filter(product => product.id === parseInt(id))[0];
    const { title, price } = product;

    const handleClose = () => setOpen(false);

    const increaseAmount = () => {
        if (amount < 1000) {
            setAmount(amount + 1);
        }
    };

    const decreaseAmount = () => {
        if (amount > 0) {
            setAmount(amount - 1);
        }
    };

    const handleAmountOnChange = (event) => {
        const value = parseInt(event.target.value);

        if (isNaN(value)) {
            setAmount(0);
            return;
        }

        if (value < 1000) {
            setAmount(parseInt(value));
        }
    };

    const handleAddProduct = () => {
        dispatch(addProduct(product, amount));

        setOpen(true);
    };

    useEffect(() => {
        const productsWithoutCurrentProduct = products.filter(product => product.id !== parseInt(id));
        const randomNumbers = [];

        const randomRecommendProducts = () => {
            const randomNumber = Math.floor(Math.random() * productsWithoutCurrentProduct.length);

            if (randomNumbers.includes(randomNumber)) {
                randomRecommendProducts();
            } else {
                randomNumbers.push(randomNumber);
            }

            if (randomNumbers.length < 3) {
                randomRecommendProducts();
            }
        };

        randomRecommendProducts();

        setRecommendProducts(randomNumbers.map(randomNumber => productsWithoutCurrentProduct[randomNumber]))
    }, [id]);

    return (
        <>
            <Card variant="outlined">
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <div className={classes.fakeImage}>Image</div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div className={classes.content}>
                            <Typography variant="h4" className={classes.verticalMargin}>
                                {title}
                            </Typography>
                            <Typography variant="h5" className={clsx(classes.price, classes.verticalMargin)}>
                                $ {price}
                            </Typography>
                            <Divider />
                            <Typography color="textSecondary" className={classes.verticalMargin}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo quam vel aliquet sodales. Cras sit amet mollis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo quam vel aliquet sodales.
                            </Typography>
                            <Divider />
                            <Grid container alignItems="center" className={classes.verticalMargin}>
                                <Grid item>
                                    <IconButton onClick={decreaseAmount}>
                                        <RemoveIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        className={classes.textField}
                                        value={amount}
                                        onChange={handleAmountOnChange}
                                    />
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={increaseAmount}>
                                        <AddIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        className={classes.button}
                                        onClick={handleAddProduct}
                                        disabled={amount > 0 ? false : true}
                                    >
                                        Add to Cart
                                    </Button>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Typography variant="subtitle1" className={classes.verticalMargin}>
                                Recommend Products
                            </Typography>
                            <Grid container spacing={2}>
                                {recommendProducts.map(({ id, title, price }) => (
                                    <Grid xs={12} md={4} item key={id}>
                                        <NavLink
                                            to={`/products/${id}`}
                                            className={classes.navLink}
                                            onClick={() => setAmount(0)}
                                        >
                                            <ProductCard
                                                recommend
                                                title={title}
                                                price={price}
                                            />
                                        </NavLink>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Card>
            <Snackbar
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={5000}
                message={
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <DoneIcon className={classes.green} />
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">
                                Add product to cart successfully!
                            </Typography>
                        </Grid>
                    </Grid>
                }
            />
        </>
    );
};

export default ProductDetail;