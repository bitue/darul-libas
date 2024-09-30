import axios from 'axios';

import { useEffect, useState } from 'react';

export const useToken = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(false);

    const saveToken = (token) => {
        localStorage.setItem('token', token);

        setToken(token);
    };

    const clearToken = () => {
        localStorage.removeItem('token');
        setToken('');

        //setUser(null);
    };
    const signOut = () => {
        clearToken();
        setAdmin(null);
    };

    const getData = async () => {
        console.log('get data call ');
        try {
            if (!token) {
                return;
            }
            setLoading(true); // got the token so loading is on to fetch user
            const res = await axios.get(
                'https://darullibas-backend.onrender.com/auth/getAdminByToken',
                {
                    headers: {
                        Authorization: token
                    }
                }
            );
            const getAdmin = res.data.admin;
            setAdmin(getAdmin);
            console.log(getAdmin);
            setLoading(false); // got user or not but loading now false ;
        } catch (err) {
            // unauthorized user !!! need to add frontend page that unAuthorized msg !
            console.log('admin not found');
            setAdmin(null);
            setToken(null);
            console.log(err.message);
        }
    };

    useEffect(() => {
        getData();
    }, [token]);

    // console.log(token);

    return { token, saveToken, clearToken, admin, setAdmin, setToken, loading, signOut };
};
