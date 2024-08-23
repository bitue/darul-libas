import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';
const Products = () => {
    const productList = [
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'genji',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'pant',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'pant',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'pant',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'panjabi',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                'afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'pant',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'pant',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        },
        {
            price: 100,
            img: 'hero.jpg',
            brand: 'as sunnah',
            description:
                ' afjiwnmfrklfklermfklermflkermflkermfklermflkmrelflkermferklmflrkemfklermfkerlm',
            category: 'pant',
            Feature: false,
            status: 'In Stock',
            amountOfSell: 130
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="flex justify-around flex-wrap ">
                {productList.map((ele) => {
                    return <Product data={ele}></Product>;
                })}
            </div>

            <Footer />
        </div>
    );
};

export default Products;
