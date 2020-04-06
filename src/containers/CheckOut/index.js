import React, { useState } from 'react';
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    makeStyles,
} from '@material-ui/core';

import Stepper from './components/Stepper';
import ButtonGroup from './components/ButtonGroup';
import PriceTotal from '../../components/PriceTotal';

import Cart from './components/Cart';
import Delivery from './components/Delivery';
import Payment from './components/Payment';

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(2, 1),
    },
}));

const CheckOut = () => {
    const [step, setStep] = useState(0);
    const classes = useStyles();

    const renderContent = () => {
        switch (step) {
            case 0:
                return <Cart />;
            case 1:
                return <Delivery />;
            case 2:
                return <Payment />;
            case 3:
                return 'Comfirmation';
            case 4:
                return 'Review';
            default:
                return '';
        }
    };

    return (
        <Card className={classes.card} variant="outlined">
            <CardHeader title={<Stepper step={step} />} />
            <CardContent>
                {renderContent()}
            </CardContent>
            <Grid container justify="flex-end" spacing={1}>
                <Grid item>
                    {step === 0 && (
                        <PriceTotal />
                    )}
                </Grid>
                <Grid item>
                    <ButtonGroup step={step} setStep={setStep} />
                </Grid>
            </Grid>
        </Card>
    );
};

export default CheckOut;