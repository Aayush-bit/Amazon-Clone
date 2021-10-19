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
                    <Product />
                </div>
                <div className="home__row">
                    {/* <Product /> */}
                </div>
                <div className="home__row">
                    {/* <Product /> */}
                </div>
            </div>
        </div>
    )
}

export default Home
