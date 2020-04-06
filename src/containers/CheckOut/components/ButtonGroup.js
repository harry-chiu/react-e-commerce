import React from 'react';
import clsx from 'clsx';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    buttonGroup: {
        float: 'right',
    },
    button: {
        width: '80px',
        margin: theme.spacing(0, 1),
    },
    hidden: {
        display: 'none',
    },
}));

const ButtonGroup = (props) => {
    const { step, setStep } = props;
    const classes = useStyles();

    const previousStep = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handleSubmit = () => {
        setStep(step + 1);
    };

    if (step > 3) {
        return null;
    }

    return (
        <div className={classes.buttonGroup}>
            <Button
                variant="outlined"
                color="default"
                onClick={previousStep}
                className={clsx(classes.button, {
                    [classes.hidden]: step === 0,
                })}
            >
                Prev
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={nextStep}
                className={clsx(classes.button, {
                    [classes.hidden]: step === 3,
                })}
            >
                Next
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                className={clsx(classes.button, {
                    [classes.hidden]: step !== 3,
                })}
            >
                Submit
            </Button>
        </div>
    );
};

export default ButtonGroup;