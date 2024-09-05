import React, { createContext, useState } from 'react';
import { useToken } from '../hooks/useToken';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    const { token, saveToken, clearToken, admin, setAdmin, setToken, loading } = useToken();
    const Data = {
        productList,
        setProductList,
        admin,
        setAdmin,
        token,
        saveToken,
        clearToken,
        setToken,
        loading
    };

    return <DataContext.Provider value={Data}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
