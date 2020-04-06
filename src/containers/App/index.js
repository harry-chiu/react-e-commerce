import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import Layout from '../../components/Layout';
import Home from '../Home';
import Product from '../Product';
import ProductDetail from '../ProductDetail';
import CheckOut from '../CheckOut';

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Layout>
                    <Route path="/" exact component={Home} />
                    <Route path="/product" exact component={Product} />
                    <Route path="/product/:id" component={ProductDetail} />
                    <Route path="/checkout" component={CheckOut} />
                </Layout>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;