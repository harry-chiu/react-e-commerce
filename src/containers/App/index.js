import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Layout from '../../components/Layout';
import PrivateRoute from '../../components/PrivateRoute';
import SignIn from '../SignIn';
import Home from '../Home';
import Product from '../Product';
import ProductDetail from '../ProductDetail';
import CheckOut from '../CheckOut';

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/product" exact component={Product} />
                    <Route path="/product/:id" component={ProductDetail} />
                    <Route path="/sign-in" component={SignIn} />
                    <PrivateRoute path="/product/:id/checkout" component={CheckOut} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;