import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './cards.scss';
import { Card, Col, Row, Button, Modal } from 'antd';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import Results from '../../fetchFromAPI/api';
import CardDetails from '../CardDetails/cardDetails';
import { productActions } from '../../Store/productSlice'
import searchFunction from '../CardDetails/SearchFunction';

const { Meta } = Card;

const Cards = () => {
    const dispatch = useDispatch();
    const [showCardDetails, setShowCardDetails] = useState(false);
    const [cardDetailsData, setcardDetailsData] = useState({});
    const productDetails = useSelector((state) => state.product.productDetails);
    const filterValue = useSelector((state) => state.filter.filterValue);
    const searchValue = useSelector((state) => state.search.searchValue);

    const handleHeart = (indx) => {
        dispatch(productActions.heartAction({ indx }));
    }

    return (
        <div className='cards-container'>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {
                        Results?.map((item, indx) => {

                            if ((filterValue === 'All Category') && searchFunction(searchValue,item.name)) {
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
                                                <MdOutlineFavorite style={{ height: '25px', width: '25px', color: 'red' }} onClick={() => handleHeart(indx)} />
                                            }

                                        </div>
                                    </Card>
                                </Col>
                            }

                            if ((item.categoryName === filterValue) && searchFunction(searchValue,item.name)) {
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
                                                <MdOutlineFavorite style={{ height: '25px', width: '25px', color: 'red' }} onClick={() => handleHeart(indx)} />
                                            }

                                        </div>
                                    </Card>
                                </Col>
                            }

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
                    onCancel={() => {
                        setShowCardDetails(false)
                        setcardDetailsData({})
                    }}
                    footer={null}
                    width={1200}
                >
                    <CardDetails cardDetailsData={cardDetailsData} />
                </Modal>
            }
        </div>
    );
};

export default Cards;
