import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const Data = {
        productList,
        setProductList
    };

    return <DataContext.Provider value={Data}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
