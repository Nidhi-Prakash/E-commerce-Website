import React, { useState } from 'react';
import './cardDetails.scss';
import { Carousel, Col, Row, Rate } from 'antd';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';


const CardDetails = ({ apiData, editKey }) => {

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function addCartFunction(key) {
        apiData.map((item) => {
            if (item.key === key) {
                item.addedToCart = true;
                localStorage.setItem([item]);
            }
        })
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

                                        <div className='add-cart-btn-container'>
                                            <button className='add-cart-btn' style={{ width: 'max-content' }} onClick={() => addCartFunction(selectedProduct?.key)}>Add to Cart</button>
                                        </div>
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
