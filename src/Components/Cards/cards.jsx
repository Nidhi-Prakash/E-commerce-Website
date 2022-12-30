import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './cards.scss';
import { Card, Col, Row, Button, Modal } from 'antd';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import Results from '../../fetchFromAPI/api';
import CardDetails from '../CardDetails/cardDetails';
import {productActions} from '../../Store/productSlice'

const { Meta } = Card;

const Cards = () => {
    const dispatch = useDispatch();
    const [showCardDetails, setShowCardDetails] = useState(false);
    const [cardDetailsData, setcardDetailsData] = useState({});

    const productDetails = useSelector((state) => state.product.productDetails);
    
    const handleHeart = (indx) => {
        dispatch(productActions.heartAction({indx}));
    }

    return (
        <div className='cards-container'>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {
                        Results?.map((item, indx) => {
                            // console.log('ITEM', item);
                            return <Col span={8} className='columns'>
                                <Card
                                    hoverable
                                    style={{
                                        width: 350
                                    }}
                                    key={item?.key}
                                    className='card'
                                    cover={<img alt="example" src={item?.images?.[0]?.url} />}
                                >
                                    <Meta title={item?.name} description={item?.price?.currencyIso === 'INR' ? `Rs. ${item?.price?.value}` : `$. ${item?.price?.value}`} />

                                    <div className='card-footer'>
                                        <Button onClick={() => {
                                            setcardDetailsData({ ...item })
                                            setShowCardDetails(true)
                                        }}>More</Button>

                                        {productDetails[indx].isFavorite === false ? 
                                            <MdOutlineFavoriteBorder style={{ height: '25px', width: '25px' }} onClick={() => handleHeart(indx)} />
                                            :
                                            <MdOutlineFavorite style={{ height: '25px', width: '25px' }} onClick={() => handleHeart(indx)} />
                                        }                                         
                                        
                                    </div>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </div>

            {
                showCardDetails && <Modal
                    open={showCardDetails}
                    title="PRODUCT DETAILS"
                    centered
                    closable
                    // onOk={() => setShowCardDetails(false)}
                    onCancel={() => {
                        setShowCardDetails(false)
                        setcardDetailsData({})
                    }}
                    footer={null}
                    width={1200}
                // height={600}
                >
                    <CardDetails cardDetailsData={cardDetailsData} />
                </Modal>
            }
        </div>
    );
};

export default Cards;
