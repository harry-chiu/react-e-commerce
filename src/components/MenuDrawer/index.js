import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Drawer,
    makeStyles,
    Collapse,
} from '@material-ui/core';
import {
    Home as HomeIcon,
    ShoppingBasket as ShoppingBasketIcon,
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon
} from '@material-ui/icons';

const menuItems = [
    {
        id: 1,
        title: 'Home',
        pathname: '/',
        icon: <HomeIcon />,
    },
    {
        id: 2,
        title: 'Category',
        icon: <ShoppingBasketIcon />,
        subMenuItems: [
            {
                id: 1,
                title: 'Clothes',
                pathname: '/products',
                category: 'Clothes',
            },
            {
                id: 2,
                title: 'Pants',
                pathname: '/products',
                category: 'Pants',
            },
            {
                id: 3,
                title: 'Shoes',
                pathname: '/products',
                category: 'Shoes',
            },
            {
                id: 4,
                title: 'Decorations',
                pathname: '/products',
                category: 'Decorations',
            },
        ],
    },
];

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    navLink: {
        textDecoration: 'none',
        color: 'inherit',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const MenuDrawer = ({ open, setOpen }) => {
    const classes = useStyles();
    const [collapse, setCollapse] = useState(true);

    return (
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <div role="presentation" className={classes.list}>
                <List>
                    {menuItems.map(({ id, icon, title, pathname, subMenuItems }) => {
                        if (subMenuItems) {
                            return (
                                <React.Fragment key={id}>
                                    <ListItem button onClick={() => setCollapse(!collapse)}>
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText primary={title} />
                                        {collapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </ListItem>
                                    <Collapse in={collapse} timeout="auto" unmountOnExit>
                                        <List disablePadding>
                                            {subMenuItems.map(({ id, title, pathname, category }) => (
                                                <NavLink
                                                    key={id}
                                                    to={{ pathname, category }}
                                                    className={classes.navLink}
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <ListItem button className={classes.nested}>
                                                        <ListItemText primary={title} />
                                                    </ListItem>
                                                </NavLink>
                                            ))}
                                        </List>
                                    </Collapse>
                                </React.Fragment>
                            );
                        }

                        return (
                            <NavLink
                                key={id}
                                to={pathname}
                                className={classes.navLink}
                                onClick={() => setOpen(false)}
                            >
                                <ListItem button>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </NavLink>
                        );
                    })}
                </List>
            </div>
        </Drawer>
    );
};

export default MenuDrawer;