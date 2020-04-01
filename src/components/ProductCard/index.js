import React from 'react';
import {
    Grid,
    Card,
    Typography,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        transition: '0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    fakeImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: recommend => recommend ? 120 : 180,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.h5.fontSize,
        background: '#eeeeee',
        [theme.breakpoints.down('sm')]: {
            height: 240,
        },
    },
    price: {
        color: '#e91e63',
    },
    horizentalPadding: {
        padding: theme.spacing(1),
    },
}));

const ProductCard = ({ title, price, recommend = false }) => {
    const classes = useStyles(recommend);

    return (
        <Card variant="outlined" className={classes.card}>
            <div className={classes.fakeImage}>
                Image
            </div>
            <div className={classes.horizentalPadding}>
                <Grid container alignItems="center" className={classes.verticalMargin}>
                    <Grid item xs={recommend ? 12 : 'auto'}>
                        <Typography variant={recommend ? 'h6' : 'h5'} color="textSecondary" >
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" className={classes.price}>
                            $ {price}
                        </Typography>
                    </Grid>
                </Grid>
                {!recommend && (
                    <Typography variant="subtitle2" color="textSecondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo quam vel aliquet sodales. Cras sit amet mollis turpis.
                    </Typography>
                )}
            </div>
        </Card>
    );
};

export default ProductCard;