import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import { DataContextProvider } from './context/dataContext';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/checkout',
        element: <Checkout />
    },
    {
        path: '/product/details',
        element: <ProductDetails />
    },

    {
        path: '/product',
        element: <Products />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
]);

function App() {
    return (
        <DataContextProvider>
            <RouterProvider router={router} />
        </DataContextProvider>
    );
}

export default App;
