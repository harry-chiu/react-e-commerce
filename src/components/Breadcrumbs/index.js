import React from 'react';
import {
    NavLink,
    useLocation,
} from 'react-router-dom';
import {
    Breadcrumbs,
    Typography,
    makeStyles,
} from '@material-ui/core';

const pathnameMap = {
    '/': 'Home',
    '/products': 'Product',
    '/checkout': 'Check Out',
};

const useStyles = makeStyles(theme => ({
    container: {
        margin: theme.spacing(2, 0),
    },
    navLink: {
        color: '#737373',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

const BreadcrumbsWrapper = () => {
    const classes = useStyles();
    const { pathname } = useLocation();

    const pathnames = pathname.split('/');

    return (
        <div className={classes.container}>
            <Breadcrumbs>
                {pathname === '/' ? (
                    <Typography variant="h5" color="secondary">
                        {pathnameMap[pathname]}
                    </Typography>
                ) : (
                        pathnames.map((pathname, index) => {
                            const match = `/${pathname}`;
                            const title = pathnameMap[match] || pathname;

                            if (index === pathnames.length - 1) {
                                return (
                                    <Typography key={index} variant="h5" color="secondary">
                                        {title}
                                    </Typography>
                                );
                            }

                            return (
                                <NavLink key={index} to={match} className={classes.navLink}>
                                    <Typography variant="h5">
                                        {title}
                                    </Typography>
                                </NavLink>
                            );
                        })
                    )}
            </Breadcrumbs>
        </div>
    );
};

export default BreadcrumbsWrapper;