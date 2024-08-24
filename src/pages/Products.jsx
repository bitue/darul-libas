import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';
const Products = () => {
    const productList = [
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product0',
            productName: 'Panjabi',
            price: 586,
            star: 4,
            review: 2077,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product1',
            productName: 'Panjabi',
            price: 1422,
            star: 5,
            review: 1347,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product2',
            productName: 'Panjabi',
            price: 793,
            star: 4,
            review: 898,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product3',
            productName: 'Panjabi',
            price: 1266,
            star: 5,
            review: 1779,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product4',
            productName: 'Panjabi',
            price: 849,
            star: 4,
            review: 1291,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product5',
            productName: 'Panjabi',
            price: 1434,
            star: 5,
            review: 1828,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product6',
            productName: 'Panjabi',
            price: 1234,
            star: 5,
            review: 358,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product7',
            productName: 'Panjabi',
            price: 778,
            star: 4,
            review: 1582,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product8',
            productName: 'Panjabi',
            price: 703,
            star: 5,
            review: 737,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product9',
            productName: 'Panjabi',
            price: 1094,
            star: 5,
            review: 770,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product10',
            productName: 'Panjabi',
            price: 1287,
            star: 4,
            review: 1861,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product11',
            productName: 'Panjabi',
            price: 598,
            star: 5,
            review: 807,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product12',
            productName: 'Panjabi',
            price: 1316,
            star: 4,
            review: 594,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product13',
            productName: 'Panjabi',
            price: 1303,
            star: 5,
            review: 1256,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product14',
            productName: 'Panjabi',
            price: 922,
            star: 5,
            review: 754,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product15',
            productName: 'Panjabi',
            price: 1401,
            star: 4,
            review: 1716,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product16',
            productName: 'Panjabi',
            price: 584,
            star: 4,
            review: 1990,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product17',
            productName: 'Panjabi',
            price: 1332,
            star: 4,
            review: 1749,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product18',
            productName: 'Panjabi',
            price: 1157,
            star: 4,
            review: 1220,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product19',
            productName: 'Panjabi',
            price: 723,
            star: 4,
            review: 1498,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product20',
            productName: 'Panjabi',
            price: 1304,
            star: 4,
            review: 339,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product21',
            productName: 'Panjabi',
            price: 980,
            star: 5,
            review: 1443,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product22',
            productName: 'Panjabi',
            price: 1053,
            star: 5,
            review: 1720,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product23',
            productName: 'Panjabi',
            price: 509,
            star: 4,
            review: 694,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product24',
            productName: 'Panjabi',
            price: 1173,
            star: 5,
            review: 116,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product25',
            productName: 'Panjabi',
            price: 860,
            star: 4,
            review: 902,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product26',
            productName: 'Panjabi',
            price: 834,
            star: 5,
            review: 572,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product27',
            productName: 'Panjabi',
            price: 1005,
            star: 4,
            review: 208,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product28',
            productName: 'Panjabi',
            price: 1226,
            star: 5,
            review: 1362,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product29',
            productName: 'Panjabi',
            price: 1288,
            star: 5,
            review: 2013,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product30',
            productName: 'Panjabi',
            price: 1292,
            star: 4,
            review: 102,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product31',
            productName: 'Panjabi',
            price: 765,
            star: 4,
            review: 762,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product32',
            productName: 'Panjabi',
            price: 735,
            star: 5,
            review: 1549,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product33',
            productName: 'Panjabi',
            price: 704,
            star: 4,
            review: 1834,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product34',
            productName: 'Panjabi',
            price: 1388,
            star: 4,
            review: 1942,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product35',
            productName: 'Panjabi',
            price: 785,
            star: 4,
            review: 1443,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product36',
            productName: 'Panjabi',
            price: 1467,
            star: 4,
            review: 506,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product37',
            productName: 'Panjabi',
            price: 576,
            star: 4,
            review: 1301,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product38',
            productName: 'Panjabi',
            price: 884,
            star: 4,
            review: 905,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product39',
            productName: 'Panjabi',
            price: 770,
            star: 5,
            review: 1976,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product40',
            productName: 'Panjabi',
            price: 1316,
            star: 4,
            review: 1066,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product41',
            productName: 'Panjabi',
            price: 1334,
            star: 4,
            review: 535,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product42',
            productName: 'Panjabi',
            price: 1153,
            star: 4,
            review: 1045,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product43',
            productName: 'Panjabi',
            price: 1076,
            star: 4,
            review: 1009,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product44',
            productName: 'Panjabi',
            price: 800,
            star: 5,
            review: 403,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product45',
            productName: 'Panjabi',
            price: 1080,
            star: 5,
            review: 556,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product46',
            productName: 'Panjabi',
            price: 1436,
            star: 5,
            review: 1602,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product47',
            productName: 'Panjabi',
            price: 1420,
            star: 4,
            review: 630,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product48',
            productName: 'Panjabi',
            price: 1320,
            star: 4,
            review: 734,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product49',
            productName: 'Panjabi',
            price: 927,
            star: 5,
            review: 1101,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
        },
        {
            productImgList: ['hero.jpg', 'hero.jpg', 'hero.jpg'],
            productId: 'product50',
            productName: 'Panjabi',
            price: 933,
            star: 5,
            review: 1088,
            description: "It's a very high-quality product",
            features: ['It has good fabric', 'It is too comfortable', 'Washable fabric']
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
