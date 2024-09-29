import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import { useToken } from '../../hooks/useToken';
import axios from 'axios';
import { toast } from 'react-toastify';
import { DataContext } from '../../context/dataContext';

const Auth = ({ children }) => {
    const { admin, setAdmin, token, setToken } = useContext(DataContext);
    const navigate = useNavigate();

    //setToken(localStorage.getItem('token') || '');
    const tokenLocal = localStorage.getItem('token');
    console.log(tokenLocal, '------------------');

    if (!tokenLocal) {
        return <Navigate to="/login" replace={true} />;
    }

    // useEffect(() => {
    //     if (!token) {
    //         navigate('/login');
    //     }
    // }, [token]);

    return tokenLocal ? <div>{children}</div> : null;
};

export default Auth;
