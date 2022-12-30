import React, { useState } from 'react';
import './navbar.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrUserFemale, GrUserManager } from 'react-icons/gr';
import { GiKidSlide } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { Drawer, Menu } from 'antd';
import Cart from '../Cart/cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [sideBar, setSideBar] = useState(false);
    const [cart, setCart] = useState(false);

    const productDetails = useSelector((state) => state.productDetails);

    return (
        <div>
            <div className='navbar'>
                <div><GiHamburgerMenu className='hamburger' onClick={() => {sideBar ? setSideBar(false) : setSideBar(true)}} /></div>
                <h3 style={{ fontFamily: 'Unbounded', color: 'red' }}>N & P</h3>
                <div><FaShoppingCart className='cart' onClick={() => {cart ? setCart(false) : setCart(true)}} /></div>
            </div>

            {
                sideBar &&
                <Drawer
                    title={'SELECT CATEGORY'}
                    open={sideBar}
                    onClose={() => setSideBar(false)}
                    width="320px"
                    closable={false}
                    placement='left'
                    rootStyle={{ marginTop: '52px', border: 'none', outline: 'none' }}
                    bodyStyle={{ padding: '10px' }}
                >
                    <Menu>
                        <Menu.Item icon={<GrUserFemale style={{ marginRight: '10px' }} />}>WOMEN</Menu.Item>
                        <Menu.Item icon={<GrUserManager style={{ marginRight: '10px' }} />}>MEN</Menu.Item>
                        <Menu.Item icon={<GiKidSlide style={{ marginRight: '10px' }} />}>KIDS</Menu.Item>
                        <Menu.Item icon={<MdOutlineFavoriteBorder style={{ marginRight: '10px' }} />}>WISHLIST</Menu.Item>
                    </Menu>

                </Drawer>
            }

            {
                cart &&
                <Drawer
                    title={`Shopping bag (${productDetails.length})`}
                    open={cart}
                    onClose={() => setCart(false)}
                    width="650px"
                    closable={false}
                    placement='right'
                    rootStyle={{ marginTop: '52px', border: 'none', outline: 'none' }}
                    bodyStyle={{maxHeight : '83%'}}
                >
                    <Cart />

                </Drawer>
            }

        </div>
    );
};

export default Navbar;
