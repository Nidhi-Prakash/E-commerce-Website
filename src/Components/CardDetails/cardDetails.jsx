import React, { useState } from 'react';
import './cardDetails.scss';
import { Carousel, Col, Row, Rate } from 'antd';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { cartActions } from '../../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../Store/productSlice'
import { Popover } from 'antd';


const CardDetails = ({ cardDetailsData }) => {
    const dispatch = useDispatch();
    const cartProductDetails = useSelector((state) => state.cart.cartProductDetails);
    const productDetails = useSelector((state) => state.product.productDetails);
    const [open, setOpen] = useState(false);
    const [curSize, setCurSize] = useState(cardDetailsData?.variantSizes.slice(-1)[0].filterCode);
    const color = cardDetailsData.articles?.[0]?.color?.code;


    var isAddedToCart = false
    for (const temp of cartProductDetails)
        if ((temp.key === cardDetailsData.key) && (curSize === undefined || curSize === temp.productSize)) isAddedToCart = true;


    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const addCartFunction = (cardDetailsData) => {
        dispatch(cartActions.addToCart({ cardDetailsData: cardDetailsData, productSize: curSize }));
    };

    const handleHeart = (indx) => {
        dispatch(productActions.heartAction({ indx }))
    }

    return (
        <>
            <div className='product-details-wrapper'>
                <Row>
                    <Col span={12} className='first-grid-box'>
                        <Carousel effect="fade" className='carousel-container'>
                            {cardDetailsData?.galleryImages.map((image) => {
                                return <img src={image?.url} alt='1st' className='gallery' />
                            })}
                        </Carousel>

                    </Col>

                    <Col span={12} className='second-grid-box'>
                        <div>
                            <div className='name-favourite'>
                                <div>
                                    <h1 style={{ width: '372px' }}>{cardDetailsData?.name}</h1>
                                    <div className='color' style={{ backgroundColor: `#${color}` }}></div>
                                </div>
                                {productDetails[cardDetailsData.key - 1].isFavorite === false ?
                                    <MdOutlineFavoriteBorder style={{ height: '25px', width: '25px', cursor: 'pointer', position: 'relative', bottom: '15px' }} onClick={() => handleHeart(cardDetailsData.key - 1)} />
                                    :
                                    <MdOutlineFavorite style={{ height: '25px', width: '25px', cursor: 'pointer', position: 'relative', bottom: '15px', color: 'red' }} onClick={() => handleHeart(cardDetailsData.key - 1)} />
                                }

                            </div>

                            <div className='price'>
                                <h4>{cardDetailsData?.price?.currencyIso === 'INR' ? `Rs. ${cardDetailsData?.price?.value}` : `$. ${cardDetailsData?.price?.value}`}</h4>
                            </div>

                            <div className='rating'>
                                <Rate allowHalf disabled defaultValue={getRandomArbitrary(0, 6)} />
                            </div>

                            <div className='size-selector-container'>
                                <select id='sizeOption' name="sizet" className='size-selector'
                                    onChange={() => { setCurSize(document.getElementById("sizeOption")?.value) }}
                                >
                                    {
                                        cardDetailsData?.variantSizes.map((size) => {
                                            if (size !== null) {
                                                return <option value={size?.filterCode} selected="selected" className='options'>{size?.filterCode}</option>
                                            }
                                        })
                                    }
                                </select>
                            </div>


                            {
                                isAddedToCart === true
                                    ? <Popover
                                        content={'Product has been already added to cart'}
                                        trigger="click"
                                        open={open}
                                    >
                                        <div className='add-cart-btn-container'>
                                            <button className='add-cart-btn' style={{ width: 'max-content', padding: '15px 187px' }} onClick={() => setOpen(!open)}>Added to Cart</button>
                                        </div>
                                    </Popover>

                                    :
                                    <div className='add-cart-btn-container'>
                                        <button className='add-cart-btn' style={{ width: 'max-content' }} onClick={() => addCartFunction(cardDetailsData)}>Add to Cart</button>
                                    </div>
                            }

                            <div className='review-container'>
                                <h3 className='review-heading'>Write Review</h3>
                                <div className='review-input-btn'>
                                    <input type="text" className='review-input' />
                                    <button className='review-btn'>Post</button>
                                </div>
                            </div>

                            {/* <div className='comment-wrapper'>
                                            <div className='comment-container'>
                                                <p className='date'>29/12/2023</p>
                                                <div className='comment'>
                                                    I totally loved this project. It's a must buy guys. Go for it.
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comment-wrapper'>
                                            <div className='comment-container'>
                                                <p className='date'>29/12/2023</p>
                                                <div className='comment'>
                                                    I totally loved this project. It's a must buy guys. Go for it.
                                                </div>
                                            </div>
                                        </div> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CardDetails;
