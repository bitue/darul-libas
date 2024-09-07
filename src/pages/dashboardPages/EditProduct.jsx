import React from 'react';
import { useLocation } from 'react-router-dom';

const EditProduct = () => {
    const Location = useLocation();
    console.log(Location.state);
    return <div>edit product</div>;
};

export default EditProduct;
