// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Products from './pages/Products';
// import Checkout from './pages/Checkout';
// import { DataContextProvider } from './context/dataContext';
// import ProductDetails from './pages/ProductDetails';
// import Dashboard from './pages/dashboard';
// import { ToastContainer } from 'react-toastify';
// import Login from './pages/Login';
// import AddProducts from './pages/dashboardPages/AddProducts';
// import CreateAdmin from './pages/dashboardPages/CreateAdmin';
// import AdminProfile from './pages/dashboardPages/AdminProfile';
// import Orders from './pages/dashboardPages/Orders';
// import ProductsViewAdmin from './pages/dashboardPages/ProductsViewAdmin';
// import SuccessfulOrders from './pages/dashboardPages/SuccessfulOrders';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home />
//     },
//     {
//         path: '/about',
//         element: <About />
//     },
//     {
//         path: '/contact',
//         element: <Contact />
//     },
//     {
//         path: '/checkout',
//         element: <Checkout />
//     },
//     {
//         path: '/product/details',
//         element: <ProductDetails />
//     },

//     {
//         path: '/product',
//         element: <Products />
//     },
//     {
//         path: '/login',
//         element: <Login />
//     },

//     {
//         path: '/dashboard',
//         element: <Dashboard />,
//         children: [
//             {
//                 path: '/addProducts',
//                 element: <AddProducts />
//             },
//             {
//                 path: '/createAdmin',
//                 element: <CreateAdmin></CreateAdmin>
//             },
//             {
//                 path: '/adminProfile',
//                 element: <AdminProfile></AdminProfile>
//             },
//             {
//                 path: '/orders',
//                 element: <Orders></Orders>
//             },
//             {
//                 path: '/productViewAdmin',
//                 element: <ProductsViewAdmin />
//             },
//             {
//                 path: '/successfulOrders',
//                 element: <SuccessfulOrders />
//             }
//         ]
//     }
// ]);

// function App() {
//     return (
//         <DataContextProvider>
//             <RouterProvider router={router} />
//             <ToastContainer />
//         </DataContextProvider>
//     );
// }

// export default App;

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import { DataContextProvider } from './context/dataContext';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import AddProducts from './pages/dashboardPages/AddProducts';
import CreateAdmin from './pages/dashboardPages/CreateAdmin';
import AdminProfile from './pages/dashboardPages/AdminProfile';
import Orders from './pages/dashboardPages/Orders';
import ProductsViewAdmin from './pages/dashboardPages/ProductsViewAdmin';
import SuccessfulOrders from './pages/dashboardPages/SuccessfulOrders';
import AllCategories from './pages/dashboardPages/AllCategories';
import AddCategories from './pages/dashboardPages/AddCategories';
import ChangePasswordAdmin from './pages/dashboardPages/ChangePasswordAdmin';
import Auth from './components/Auth/Auth';
import EditProduct from './pages/dashboardPages/EditProduct';
import AllQuery from './pages/dashboardPages/AllQuery';

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
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: (
            <Auth>
                <Dashboard />{' '}
            </Auth>
        ),
        children: [
            {
                path: '',
                element: (
                    <>
                        <div className="my-10">
                            <h1 className="text-center text-5xl text-indigo-600 ">
                                Welcome to Admin Panel of{' '}
                            </h1>
                            <p className="text-center text-4xl text-white font-bold">Darul Libas</p>
                        </div>
                    </>
                )
            },
            {
                path: 'addProducts',
                element: <AddProducts />
            },
            {
                path: 'changePasswordAdmin',
                element: <ChangePasswordAdmin />
            },
            {
                path: 'addCategories',
                element: <AddCategories />
            },
            {
                path: 'allCategories',
                element: <AllCategories />
            },
            {
                path: 'createAdmin',
                element: <CreateAdmin />
            },
            {
                path: 'adminProfile',
                element: <AdminProfile />
            },
            {
                path: 'orders',
                element: <Orders />
            },
            {
                path: 'productViewAdmin',
                element: <ProductsViewAdmin />
            },
            {
                path: 'editProduct',
                element: <EditProduct />
            },
            {
                path: 'successfulOrders',
                element: <SuccessfulOrders />
            },
            {
                path: 'allQueries',
                element: <AllQuery />
            }
        ]
    }
]);

function App() {
    return (
        <DataContextProvider>
            <RouterProvider router={router} />
            <ToastContainer />
        </DataContextProvider>
    );
}

export default App;
