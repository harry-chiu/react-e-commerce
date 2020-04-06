import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import {
    Grid,
    TextField,
    makeStyles,
    Select,
    MenuItem,
    Typography,
    IconButton,
    Avatar,
} from '@material-ui/core';

import { formActions } from '../../../actions';

const { setForm } = formActions;

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const years = [...Array(100).keys()];
const icons = [
    {
        name: 'MasterCard',
        src: 'https://image.flaticon.com/icons/svg/196/196561.svg',
    },
    {
        name: 'VISA',
        src: 'https://image.flaticon.com/icons/svg/196/196578.svg',
    },
    {
        name: 'PayPal',
        src: 'https://image.flaticon.com/icons/svg/174/174861.svg',
    },
];

const useStyles = makeStyles(theme => ({
    container: {
        margin: 'auto',
        maxWidth: 720,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
    },
    content: {
        marginBottom: theme.spacing(2),
    },
    textField: {
        minWidth: 240,
    },
    cvv: {
        width: 60,
    },
    iconContainer: {
        margin: theme.spacing(1, 0),
    },
    icon: {
        border: '2px solid #eeeeee',
        boxSizing: 'border-box',
        margin: theme.spacing(0, 1),

        '&:hover': {
            background: '#ffe8ef',
        },
    },
    active: {
        background: '#ffeff4',
        borderColor: '#ffeff4',
    },
}));

const Payment = ({confirmation}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const form = useSelector(state => state.form);
    const [selected, setSelected] = useState(form.card || 'MasterCard');

    const handleSelect = (name) => {
        setSelected(name);
        dispatch(setForm('card', name));
    };

    return (
        <div className={classes.container}>
            <Typography variant="h6">
                Card
            </Typography>
            <div className={classes.iconContainer}>
                {icons.map(({ name, src }) => (
                    <IconButton
                        key={name}
                        disabled={confirmation}
                        onClick={() => handleSelect(name)}
                        className={clsx(classes.icon, selected === name ? classes.active : null)}
                    >
                        <Avatar src={src} />
                    </IconButton>
                ))}
            </div>
            <Typography variant="h6">
                Card Info
            </Typography>
            <Grid container spacing={2} className={classes.content}>
                <Grid item>
                    <TextField
                        fullWidth
                        label="Cardholder Name"
                        disabled={confirmation}
                        className={classes.textField}
                        value={form.cardholderName || ''}
                        onChange={event => dispatch(setForm('cardholderName', event.target.value))}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="Card Number"
                        disabled={confirmation}
                        className={classes.textField}
                        value={form.cardNumber || ''}
                        onChange={event => dispatch(setForm('cardNumber', event.target.value))}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={6}>
                <Grid item>
                    <Typography variant="h6">
                        End Date
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Select
                                value={form.endMonth || 0}
                                disabled={confirmation}
                                onChange={event => dispatch(setForm('endMonth', event.target.value))}
                            >
                                <MenuItem value={0} disabled>MM</MenuItem>
                                {months.map(month => (
                                    <MenuItem value={month} key={month}>{month}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item>
                            <Select
                                value={form.endYear || 0}
                                disabled={confirmation}
                                onChange={event => dispatch(setForm('endYear', event.target.value))}
                            >
                                <MenuItem value={0} disabled>YYYY</MenuItem>
                                {years.map(year => (
                                    <MenuItem value={1900 + year} key={year}>{1900 + year}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        CVV
                    </Typography>
                    <TextField
                        value={form.cvv || ''}
                        className={classes.cvv}
                        disabled={confirmation}
                        onChange={event => dispatch(setForm('cvv', event.target.value))}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Payment;