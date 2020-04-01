import React from 'react';
import {
    Container,
    CssBaseline,
} from '@material-ui/core';

import Breadcrumbs from '../Breadcrumbs';
import ShoppingCart from '../ShoppingCart';

const Layout = ({ children }) => {
    return (
        <div>
            <CssBaseline />
            <main>
                <Container>
                    <Breadcrumbs />
                    {children}
                </Container>
            </main>
            <ShoppingCart />
        </div>
    );
};

export default Layout;