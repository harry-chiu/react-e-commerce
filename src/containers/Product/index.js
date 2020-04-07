import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
    Grid,
    Select,
    MenuItem,
    makeStyles,
} from '@material-ui/core';

import products from '../../database/products';
import ProductCard from '../../components/ProductCard';

const useStyles = makeStyles(theme => ({
    navLink: {
        textDecoration: 'none',
    },
    toolbar: {
        margin: theme.spacing(2, 0),
    },
    select: {
        width: 120,
    },
}));

const Product = () => {
    const classes = useStyles();
    const location = useLocation();
    const categoryFromHome = location.category;
    const [category, setCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setCategory(categoryFromHome || 'All');
    }, [categoryFromHome]);

    useEffect(() => {
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    }, [category]);

    return (
        <>
            <div className={classes.toolbar}>
                <Select
                    className={classes.select}
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Clothes">Clothes</MenuItem>
                    <MenuItem value="Pants">Pants</MenuItem>
                    <MenuItem value="Shoes">Shoes</MenuItem>
                    <MenuItem value="Decorations">Decorations</MenuItem>
                </Select>
            </div>
            <Grid container spacing={3}>
                {filteredProducts.map(({ id, title, price }) => (
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

export default Product;