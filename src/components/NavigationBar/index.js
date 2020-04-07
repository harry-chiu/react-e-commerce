import React from 'react';
import {
    Slide,
    AppBar,
    Toolbar,
    Typography,
    useScrollTrigger,
    makeStyles,
    IconButton,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const HideOnScroll = props => {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        boxSizing: 'border-box',
        color: '#333333',
        background: '#ffffff',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
}));

const NavigationBar = props => {
    const classes = useStyles();
    const { setOpen } = props;

    return (
        <HideOnScroll {...props}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        className={classes.menuButton}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        E-Commerce
                    </Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default NavigationBar;