import React, { useState } from 'react';
import './cardDetails.scss';
import { Carousel, Col, Row, Rate } from 'antd';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { cartActions } from '../../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Popover } from 'antd';


const CardDetails = ({ apiData, editKey }) => {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function addCartFunction(selectedProduct) {
        dispatch(cartActions.addToCart(selectedProduct));
    };

    return (
        <>
            <div>
                {
                    apiData.map((item) => {
                        if (item.key === editKey) {
                            var selectedProduct = item;
                            var color = selectedProduct?.articles?.[0]?.color?.code;
                            return <div className='product-details-wrapper'>
                                <Row>
                                    <Col span={12} className='first-grid-box'>
                                        <Carousel effect="fade" className='carousel-container'>
                                            {selectedProduct?.galleryImages.map((image) => {
                                                return <img src={image?.url} alt='1st' className='gallery' />
                                            })}
                                        </Carousel>

                                    </Col>

                                    <Col span={12} className='second-grid-box'><div>
                                        <div className='name-favourite'>
                                            <div>
                                                <h1 style={{ width: '372px' }}>{selectedProduct?.name}</h1>
                                                <div className='color' style={{ backgroundColor: `#${color}` }}></div>
                                            </div>
                                            <MdOutlineFavoriteBorder style={{ height: '25px', width: '25px', cursor: 'pointer', position: 'relative', bottom: '15px' }} />
                                        </div>

                                        <div className='price'>
                                            <h4>{selectedProduct?.price?.currencyIso === 'INR' ? `Rs. ${selectedProduct?.price?.value}` : `$. ${selectedProduct?.price?.value}`}</h4>
                                        </div>

                                        <div className='rating'>
                                            <Rate allowHalf defaultValue={getRandomArbitrary(0, 6)} />
                                        </div>

                                        <div className='size-selector-container'>
                                            <select name="sizet" className='size-selector'>
                                                {
                                                    selectedProduct?.variantSizes.map((size) => {
                                                        if (size !== null) {
                                                            return <option value={size?.filterCode} selected="selected" className='options'>{size?.filterCode}</option>
                                                        }
                                                    })
                                                }
                                            </select>
                                        </div>


                                        {
                                            selectedProduct.addedToCart === true
                                                ? <Popover
                                                    content={'Product has been already added to cart'}
                                                    trigger="click"
                                                    open={open}
                                                >
                                                    <div className='add-cart-btn-container'>
                                                        <button className='add-cart-btn' style={{ width: 'max-content', padding: '15px 187px' }} onClick={() => open === true ? setOpen(false) : setOpen(true)}>Added to Cart</button>
                                                    </div>
                                                </Popover>

                                                : <div className='add-cart-btn-container'>
                                                    <button className='add-cart-btn' style={{ width: 'max-content' }} onClick={() => addCartFunction(selectedProduct)}>Add to Cart</button>
                                                </div>
                                        }

                                    </div></Col>
                                </Row>
                            </div>
                        }
                    })
                }
            </div>
        </>
    );
};

export default CardDetails;
