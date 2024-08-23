import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

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
        path: '/product',
        element: <Products />
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
