import React from 'react';
import {
    Step,
    StepLabel,
    Stepper,
    Hidden,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    stepLabel: {
        '& > .MuiStepLabel-iconContainer > .MuiStepIcon-root': {
            color: theme.palette.secondary.light,
        },
    },
}));

const StepperWrapper = props => {
    const classes = useStyles();
    const { step } = props;

    const renderMobileStepper = () => {
        switch(step) {
            case 0:
                return 'Cart';
            case 1:
                return 'Delivery';
            case 2:
                return 'Payment';
            case 3:
                return 'Confirmation';
            default:
                return '';
        }
    };

    const renderDesktopStepper = () => {
        return (
            <Stepper activeStep={step}>
                <Step>
                    <StepLabel className={classes.stepLabel}>
                        Cart
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel className={classes.stepLabel}>
                        Delivery
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel className={classes.stepLabel}>
                        Payment
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel className={classes.stepLabel}>
                        Confirmation
                    </StepLabel>
                </Step>
            </Stepper>
        );
    };

    return (
        <>
            <Hidden smUp>
                {renderMobileStepper()}
            </Hidden>
            <Hidden smDown>
                {renderDesktopStepper()}
            </Hidden>
        </>
    );
};

export default StepperWrapper;