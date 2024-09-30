import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/dataContext';

// const panjabiData = { name: 'panjabi' };

const Navbar = () => {
    const { productList, setProductList, admin } = useContext(DataContext);
    const sum = productList.reduce((accumulator, currentValue) => {
        return accumulator + Number(currentValue.productPrice * currentValue.qty);
    }, 0);
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a>
                                    <Link to="/about">About</Link>
                                </a>
                            </li>
                            <li>
                                <Link to="/product">Product</Link>
                                {/* <ul className="p-2">
                                    <li>
                                        <a>
                                            <Link to="/product">Panjabi</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <Link to="/product">Genji</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <Link to="/product">Pant</Link>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>
                            <li>
                                <a>
                                    <Link to="/contact">Contact</Link>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <Link to="/dashboard">Dashboard</Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <Link to="/">Darul Libas</Link>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>
                                <Link to="/about">About</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/product">Product</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/contact">Contact</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/dashboard">Dashboard</Link>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <p> {admin?._id ? admin.admin : ''}</p>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm indicator-item">
                                    {productList.length}
                                </span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                        >
                            <div className="card-body">
                                <span className="text-lg font-bold">
                                    {productList.length} Items
                                </span>
                                <span className="text-info">Subtotal: {sum} TK</span>
                                {productList.length && (
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">
                                            {' '}
                                            <Link to="/checkout">Checkout</Link>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
