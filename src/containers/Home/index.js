import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import {
    Grid,
    Card,
    makeStyles,
    Typography,
} from '@material-ui/core';

import CategoryCard from '../../components/CategoryCard';
import ProductCard from '../../components/ProductCard';

import categories from '../../database/categories';
import products from '../../database/products';

const useStyles = makeStyles(theme => ({
    title: {
        margin: theme.spacing(1, 0),
    },
    banner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 360,
        [theme.breakpoints.down('sm')]: {
            height: 240,
        },
    },
    bannerTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 48,
        },
    },
    navLink: {
        textDecoration: 'none',
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <NavLink to="/products/1" className={classes.navLink}>
                <Card variant="outlined" className={clsx(classes.card, classes.banner)}>
                    <Typography variant="h1" color="textSecondary" className={classes.bannerTitle}>
                        Banner
                    </Typography>
                </Card>
            </NavLink>

            <Typography variant="h4" className={classes.title}>
                Product Categories
            </Typography>
            <Grid container spacing={3}>
                {categories.map(({ id, category }) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                        <NavLink to={{ category, pathname: "/products" }} className={classes.navLink}>
                            <CategoryCard category={category} />
                        </NavLink>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" className={classes.title}>
                Popular Products
            </Typography>
            <Grid container spacing={3}>
                {products.map(({ id, title, price }) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                        <NavLink to={`/products/${id}`} className={classes.navLink}>
                            <ProductCard title={title} price={price} />
                        </NavLink>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Home;