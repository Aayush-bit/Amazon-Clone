import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const Header = () => {
    const [{cart, user}, dispatch] = useStateValue();
    const handleAuth = () => {
        if (user) auth.signOut();
    }
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
                <div onClick={handleAuth}>
                    <Link to ={!user && "/login"} className="header__nav__option">
                        <span className="header__nav__option__smallerText">
                            hello,{" "}
                            {
                                (user) ? user?.email : "guest"
                            }
                        </span>
                        <span className="header__nav__option__biggerText">
                            {
                                (user) ? "sign out" : "sign in"
                            }
                        </span>
                    </Link>
                </div>
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
                <Link to="/checkout" className="header__nav__option__cart">
                    {/* cart icon */}
                    <ShoppingCartIcon  fontSize="large" />
                    {
                        cart?.length ? 
                        <span className="header__nav__option__cart__items">{cart?.length}</span> : 
                        <></>
                    }
                </Link>
            </div>

        </div>
    )
}

export default Header
