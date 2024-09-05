import React, { useEffect, useState } from 'react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';
import axios from 'axios';
import { toast } from 'react-toastify';
const Products = () => {
    const [pro, setPro] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const [catList, setCatList] = useState([]);
    // const [co, setCo] = useState(0);

    // const filterCategory = (data)=> {
    //     const categoryNameList =[] ;
    //     for (const i of data){
    //         categoryNameList.push(i.category.name)
    //     }

    //     setCatList(categoryNameList);

    // }

    const fetchData = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/public/getAllProducts');
            console.log(data.products);
            setPro(data.products);
            // const newCatList = [];

            // for (const i of data.products) {
            //     newCatList.push(i.category.name);
            // }
            // setCatList(newCatList);
            // console.log(catList)
            console.log(pro);
        } catch ({ message }) {
            setError(message);
            console.log(error);
            toast(message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            {loading ? (
                <p>I am loading</p>
            ) : (
                <div className="flex justify-around flex-wrap ">
                    {/* {
                        catList.forEach((ele)=> {
                            for(const p of pro){
                                if(p.category.name === ele){
                                    return  <Product data={ele}></Product>;
                                }
                            }
                        })
                    } */}
                    {pro.map((ele) => {
                        return <Product data={ele}></Product>;
                    })}
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Products;
