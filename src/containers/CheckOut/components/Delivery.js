import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Grid,
    TextField,
    makeStyles,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@material-ui/core';

import { formActions } from '../../../actions';

const { setForm } = formActions;

const useStyles = makeStyles(theme => ({
    container: {
        margin: 'auto',
        maxWidth: 720,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
    },
    textField: {
        minWidth: 240,
        maxWidth: 496,
    },
    title: {
        margin: theme.spacing(1, 0),
    },
    formControl: {
        minWidth: 180,
        maxWidth: 320,
    },
    content: {
        marginBottom: theme.spacing(2),
    },
}));

const Delivery = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const form = useSelector(state => state.form);

    return (
        <div className={classes.container}>
            <Typography variant="h6" className={classes.title}>
                Info
            </Typography>
            <Grid container spacing={2} className={classes.content}>
                <Grid item>
                    <TextField
                        fullWidth
                        label="First Name"
                        className={classes.textField}
                        value={form.firstName || ''}
                        onChange={event => dispatch(setForm('firstName', event.target.value))}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="Last Name"
                        className={classes.textField}
                        value={form.lastName || ''}
                        onChange={event => dispatch(setForm('lastName', event.target.value))}
                    />
                </Grid>
            </Grid>

            <Typography variant="h6" className={classes.title}>
                Contact
            </Typography>
            <Grid container spacing={2} className={classes.content}>
                <Grid item>
                    <TextField
                        fullWidth
                        label="Phone"
                        className={classes.textField}
                        value={form.phone || ''}
                        onChange={event => dispatch(setForm('phone', event.target.value))}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="E-mail"
                        className={classes.textField}
                        value={form.email || ''}
                        onChange={event => dispatch(setForm('email', event.target.value))}
                    />
                </Grid>
            </Grid>

            <Typography variant="h6" className={classes.title}>
                Shipping
            </Typography>
            <Grid container spacing={2} className={classes.content}>
                <Grid item>
                    <FormControl fullWidth className={classes.formControl}>
                        <InputLabel>Country</InputLabel>
                        <Select
                            fullWidth
                            value={form.country || ''}
                            onChange={event => dispatch(setForm('country', event.target.value))}
                        >
                            <MenuItem value="Taiwan">Taiwan</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth className={classes.formControl}>
                        <InputLabel>City</InputLabel>
                        <Select
                            fullWidth
                            value={form.city || ''}
                            onChange={event => dispatch(setForm('city', event.target.value))}
                        >
                            <MenuItem value="Taipei">Taipei</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="Address"
                        className={classes.textField}
                        value={form.address || ''}
                        onChange={event => dispatch(setForm('address', event.target.value))}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Delivery;