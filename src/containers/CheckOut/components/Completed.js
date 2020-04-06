import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Button,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { CheckCircleOutline as CheckCircleOutlineIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    container: {
        margin: 'auto 0',
        textAlign: 'center',
    },
    icon: {
        width: 72,
        height: 72,
        color: theme.palette.success.main,
        margin: 'auto',
    },
    navLink: {
        textDecoration: 'none',
        margin: 'auto',
    },
    text: {
        margin: theme.spacing(4, 0),
    },
}));

const Completed = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <CheckCircleOutlineIcon className={classes.icon} />
            <Typography variant="h6" align="center" className={classes.text}>
                Congratulations. Your order is accepted.
            </Typography>
            <Typography variant="subtitle2" align="center" className={classes.text}>
                Let me be clear. Not even close. We did not go
                <br />
                by choice, we went because of necessiry.
            </Typography>
            <NavLink to="/" className={classes.navLink}>
                <Button variant="contained" color="secondary">Back To Home</Button>
            </NavLink>
        </div>
    );
};

export default Completed;