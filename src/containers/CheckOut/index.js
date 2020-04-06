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
import Confirmation from './components/Confirmation';
import Completed from './components/Completed';

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(2, 1),
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 560,
    },
    footer: {
        marginTop: 'auto',
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
                return <Confirmation />;
            case 4:
                return <Completed />;
            default:
                return '';
        }
    };

    return (
        <Card className={classes.card} variant="outlined">
            <CardHeader title={<Stepper step={step} />} />
            <CardContent className={classes.content}>
                {renderContent()}
                <Grid
                    container
                    alignItems="flex-end"
                    justify="flex-end"
                    spacing={1}
                    className={classes.footer}
                >
                    <Grid item>
                        {step === 0 && (
                            <PriceTotal />
                        )}
                    </Grid>
                    <Grid item>
                        <ButtonGroup step={step} setStep={setStep} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CheckOut;