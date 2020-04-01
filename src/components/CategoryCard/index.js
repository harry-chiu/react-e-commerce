import React from 'react';
import {
    Card,
    Typography,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.2s ease-in-out',
        height: 200,
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
})

const CategoryCard = ({ category }) => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card}>
            <Typography variant="h5" color="textSecondary">
                {category}
            </Typography>
        </Card>
    );
};

export default CategoryCard;