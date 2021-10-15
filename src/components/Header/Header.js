import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    let items = 1;
    
    return (
        <div className="header">
            {/* Logo  */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
            </Link>

            {/* Search bar with search icon */}
            <div className="header__search">
                <input type="text" placeholder="Search Amazon" className="header__search__input" />
                {/* search icon */}
                <div className="header__search__button">
                    <SearchIcon />
                </div>
            </div>

            
            {/* header navigation -  sign in, orders, your prime, cart icon */}
            <div className="header__nav">
                {/* sign in */}
                <Link to ="/login" className="header__nav__option">
                    <span className="header__nav__option__smallerText">
                        hello
                    </span>
                    <span className="header__nav__option__biggerText">
                        sign in
                    </span>
                </Link>
                {/* returns and orders */}
                <Link to ="/returns-and-orders" className="header__nav__option">
                    <span className="header__nav__option__smallerText">
                        returns
                    </span>
                    <span className="header__nav__option__biggerText">
                        & orders
                    </span>
                </Link>
                {/* prime */}
                <Link to ="/amazon-prime" className="header__nav__option">
                    <span className="header__nav__option__smallerText">
                        your
                    </span>
                    <span className="header__nav__option__biggerText">
                        prime
                    </span>
                </Link>

                {/* cart */}
                <div className="header__nav__option__cart">
                    {/* cart icon */}
                    <ShoppingCartIcon />
                    {
                        items ? 
                        <span className="header__nav__option__cart__items">{items}</span> : 
                        <></>
                    }
                </div>
            </div>

        </div>
    )
}

export default Header
