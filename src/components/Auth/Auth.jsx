import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Navbar from './Navbar';
import { useToken } from '../../hooks/useToken';

const Auth = ({ children }) => {
    const { token } = useToken();
    const navigate = useNavigate();
    console.log(token, 'auth module');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, []);

    return <div>{children}</div>;
};

export default Auth;
