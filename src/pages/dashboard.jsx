import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

const dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" flex flex-wrap gap-3">
                <div className="bg-indigo-800 w-2/12 h-screen ms-5 rounded-md ">
                    <div className="py-5">
                        <ul>
                            <li>
                                <Link
                                    to="/dashboard/productViewAdmin"
                                    className="my-2 flex items-center text-[17px] py-1.5 px-4 text-white hover:text-blue-black hover:bg-indigo-950"
                                >
                                    Products View
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/orders"
                                    className="my-2 flex items-center text-[17px] py-1.5 px-4 text-white hover:text-blue-black hover:bg-indigo-950"
                                >
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/successfulOrders"
                                    className="my-2 flex items-center text-[17px] py-1.5 px-4 text-white hover:text-blue-black hover:bg-indigo-950"
                                >
                                    Successful Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/addProducts"
                                    className="my-2 flex items-center text-[17px] py-1.5 px-4 text-white hover:text-blue-black hover:bg-indigo-950"
                                >
                                    Add Product
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/adminProfile"
                                    className="my-2 flex items-center text-[17px] py-1.5 px-4 text-white hover:text-blue-black hover:bg-indigo-950"
                                >
                                    Admins
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/createAdmin"
                                    className="my-2 flex items-center text-[17px] py-1.5 px-4 text-white hover:text-blue-black hover:bg-indigo-950"
                                >
                                    Create Admin
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/addCategories"
                                    className="my-2 flex items-center text-[17px] py-1.5 px-4 text-white hover:text-blue-black hover:bg-indigo-950"
                                >
                                    Add Categories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/allCategories"
                                    className="my-2 flex items-center text-[17px] py-1.5 px-4 text-white hover:text-blue-black hover:bg-indigo-950"
                                >
                                    All Categories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/"
                                    className="my-2 flex items-center text-[17px] py-1.5 px-4 text-white hover:text-blue-black hover:bg-indigo-950"
                                >
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" mx-5 h-full w-9/12 ">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default dashboard;
