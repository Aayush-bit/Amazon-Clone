import React from 'react'
import Product from '../../components/Product/Product';
import "./Home.css"

const Home = () => {
    const img = "https://m.media-amazon.com/images/I/51upXzq22FL._SX1500_.jpg";
    // const img = "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3740_.jpg";
    
    return (
        <div className="home">
            <img 
            className="home__image" 
            src={img} />
            <div className="home__rows">
                <div className="home__row">
                    <Product 
                    id={12345}
                    title = "VRINDAVANBAZAAR.COM Krishna-Balaram Soft Toy Dolls- 8 inches- Soft and Stuffed Washable Toys"
                    price = {20}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/61sw43+4gRL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                    id={32456}
                    title = "VRINDAVANBAZAAR.COM Krishna-Balaram Soft Toy Dolls- 8 inches- Soft and Stuffed WaDavatka Hare Krishna Shirt Spiritual Meditation Yoga ISKCON Vedic Mantra Men's Unisex T-Shirtshable Toys"
                    price = {25}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/61O2psKTPKL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    {/* <Product /> */}
                </div>
                <div className="home__row">
                    <Product 
                    id={96785}
                    title = "Krishna: The Supreme Personality of Godhead - Marble Deity"
                    price = {19}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71xy9r8YwiL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                    <Product 
                    id={92003}
                    title = "Jagannath Shirt Jay Jagannatha Hare Krishna Iskcon Yoga Meditation Spiritual Men's Unisex Fitted Short Sleeve T-Shirt"
                    price = {19}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/61e70BcJWPL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                    id={87343}
                    title = "Bhagavad-gita As It Is | By - A. C. Bhaktivedanta Swami Prabhupāda"
                    price = {9.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/81HR0LQ5ZmL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id={55764}
                    title = "VRINDAVANBAZAAR.COM Lord Krishna Doll -13 inches- Soft and Stuffed Washable Toys"
                    price = {19.99}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/31bo-j4ic+L._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                    id={88567}
                    title = "VRINDAVANBAZAAR.COM Radha Krishna Soft and Cute Washable Toys; Height 6 inch"
                    price = {19.59}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71uDQjTgXCL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                    id={90221}
                    title = "VRINDAVANBAZAAR.COM Nand Baba and Yashoda MATA with Krishna Balaram Soft Toy; Height 7.5 inch"
                    price = {29.59}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71w26W89mhL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product 
                    id={74638}
                    title = "VRINDAVANBAZAAR.COM Radha Krishna Doll with 2 Cows Soft Toys; Height 6 inch"
                    price = {21.59}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/91qDLzl7D2L._AC_UL480_FMwebp_QL65_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
