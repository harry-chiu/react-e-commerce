import React, { useState } from 'react';
import {
    Toolbar,
    Container,
    CssBaseline,
} from '@material-ui/core';

import NavigationBar from '../NavigationBar';
import MenuDrawer from '../MenuDrawer';
import Breadcrumbs from '../Breadcrumbs';
import ShoppingCart from '../ShoppingCart';

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <NavigationBar setOpen={setOpen} />
            <MenuDrawer open={open} setOpen={setOpen} />
            <CssBaseline />
            <main>
                <Container>
                    <Toolbar />
                    <Breadcrumbs />
                    {children}
                </Container>
            </main>
            <ShoppingCart />
        </div>
    );
};

export default Layout;