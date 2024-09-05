import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useToken } from '../../hooks/useToken';
import axios from 'axios';
import { toast } from 'react-toastify';
import { DataContext } from '../../context/dataContext';

const Auth = ({ children }) => {
    const { admin, setAdmin, token, setToken } = useContext(DataContext);
    const navigate = useNavigate();
    console.log(token, 'auth module');
    setToken(localStorage.getItem('token') || '');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);

    return <div>{children}</div>;
};

export default Auth;
