import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        id: 1,
        src: 'https://image.flaticon.com/icons/svg/196/196561.svg',
    },
    {
        id: 2,
        src: 'https://image.flaticon.com/icons/svg/196/196578.svg',
    },
    {
        id: 3,
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
    active: {
        border: '1px solid #f50057',
        transition: '0.2s ease-in-out',
    },
}));

const Payment = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(1);
    const form = useSelector(state => state.form);

    return (
        <div className={classes.container}>
            <div>
                {icons.map(({ id, src }) => (
                    <IconButton
                        key={id}
                        onClick={() => setSelected(id)}
                        className={selected === id ? classes.active : null}
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
                        className={classes.textField}
                        value={form.cardholderName || ''}
                        onChange={event => dispatch(setForm('cardholderName', event.target.value))}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="Card Number"
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
                        onChange={event => dispatch(setForm('cvv', event.target.value))}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Payment;