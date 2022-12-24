import React, { useState, useEffect } from 'react';
import './cards.scss';
import { Card, Col, Row, Dropdown, Pagination } from 'antd';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import Results from '../../fetchFromAPI/api';

const { Meta } = Card;

const Cards = () => {

    const onMenuClick = (e) => {
        console.log('click', e);
    };
    const items = [
        {
            key: '1',
            label: 'Add to Wishlist',
        },
        {
            key: '2',
            label: 'Add to Cart',
        }
    ];

    const [apiData, setApiData] = useState(Results);
    const [favouriteKey, setFavouriteKey] = useState([]);
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
                                    key={item?.code}
                                    className='card'
                                    cover={<img alt="example" src={item?.images?.[0]?.url} />}
                                >
                                    <Meta title={item?.name} description={`$. ${item?.price?.value}`} />

                                    <div className='card-footer'>
                                        <Dropdown.Button
                                            menu={{
                                                items,
                                                onClick: onMenuClick,
                                            }}
                                            className='card-button'
                                        >
                                            Details
                                        </Dropdown.Button>

                                        {/* {
                                            favouriteKey.map((favItem) => {
                                                if (favItem === item?.code) {
                                                   setHeart(true);
                                                }
                                            })

                                        } */}

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
        </div >
    );
};

export default Cards;
