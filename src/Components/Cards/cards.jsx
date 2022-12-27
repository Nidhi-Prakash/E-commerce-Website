import React, { useState, useEffect } from 'react';
import './cards.scss';
import { Card, Col, Row, Button, Pagination, Modal } from 'antd';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import Results from '../../fetchFromAPI/api';
import CardDetails from '../CardDetails/cardDetails';

const { Meta } = Card;

const Cards = () => {

    const [showCardDetails, setShowCardDetails] = useState(false);
    const [apiData, setApiData] = useState(Results);
    const [favouriteKey, setFavouriteKey] = useState([]);
    const [editKey, setEditKey] = useState();
    // const [heart, setHeart] = useState(false);


    return (
        <div className='cards-container'>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {
                        apiData?.map((item) => {
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
                                            setEditKey(item?.key)
                                            setShowCardDetails(true)
                                        }}>More >></Button>

                                        {/* { heart
                                            ? <MdOutlineFavorite style={{ height: '25px', width: '25px' }} />
                                            : <MdOutlineFavoriteBorder style={{ height: '25px', width: '25px' }} onClick={() => setFavouriteKey([...favouriteKey, item.code])} />
                                        } */}

                                        <MdOutlineFavoriteBorder style={{ height: '25px', width: '25px' }} onClick={() => setFavouriteKey([...favouriteKey, item.code])} />
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
                    onCancel={() => setShowCardDetails(false)}
                    footer={null}
                    width={1200}
                    // height={600}
                >
                    <CardDetails apiData={apiData} editKey={editKey} />
                </Modal>
            }
        </div >
    );
};

export default Cards;
