import React, { useState } from 'react';
import './navbar.scss'
import { FaShoppingCart } from 'react-icons/fa';
import logo from "../Assets/logo.png";
import { MdOutlineFavorite } from 'react-icons/md';
import { Drawer } from 'antd';
import Wishlist from '../Wishlist/wishlist';
import { searchActions } from '../../Store/searchSlice';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../Cart/cart';

const Navbar = () => {
    const dispatch = useDispatch();
    const cartProductDetails = useSelector((state) => state.cart.cartProductDetails);
    const searchValue = useSelector((state) => state.searchValue);
    const [wishlist, setWishlist] = useState(false);
    const [cart, setCart] = useState(false);

    const handleChange = (e) => {
        dispatch(searchActions.addSearch(e.target.value));
    }

    return (
        <div>
            <div className='navbar'>
                <h3 style={{ fontFamily: 'Unbounded', color: 'red' }}> <img src={logo} alt="" style={{height: '37px', width: '37px', paddingTop: '5px'}} /> </h3>
                <div className='nav-options'>
                    <div className='search-container'>
                        <input type="search" className='search-bar' onChange={handleChange} value={searchValue} />
                    </div>
                    <MdOutlineFavorite className='wishlist' onClick={() => { wishlist ? setWishlist(false) : setWishlist(true) }} />
                    <FaShoppingCart className='cart' onClick={() => { cart ? setCart(false) : setCart(true) }} />
                </div>
            </div>

            {
                wishlist &&
                <Drawer
                    title={'YOUR WISHLIST'}
                    open={wishlist}
                    onClose={() => setWishlist(false)}
                    width="650px"
                    closable={false}
                    placement='right'
                    rootStyle={{ marginTop: '52px', border: 'none', outline: 'none' }}
                    bodyStyle={{ maxHeight: '83%' }}
                >
                    <Wishlist />
                </Drawer>
            }

            {
                cart &&
                <Drawer
                    title={`Shopping bag (${cartProductDetails.length})`}
                    open={cart}
                    onClose={() => setCart(false)}
                    width="650px"
                    closable={false}
                    placement='right'
                    rootStyle={{ marginTop: '52px', border: 'none', outline: 'none' }}
                    bodyStyle={{ maxHeight: '83%' }}
                >
                    <Cart />
                </Drawer>
            }

        </div>
    );
};

export default Navbar;
