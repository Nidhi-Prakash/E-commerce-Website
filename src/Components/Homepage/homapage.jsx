import React from 'react';
import './homepage.scss';
import { Carousel, Select } from 'antd';
import Cards from '../Cards/cards';
import Footer from '../Footer/footer';
import { BsFilterRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../Store/filterSlice';

const Homapage = () => {
    const dispatch = useDispatch();

    const handleChange = (value) => {
        dispatch(filterActions.addFilter(value));
    };


    return (
        <div className='container'>
            <Carousel autoplay effect="fade" className='carousel-container'>
                <div>
                    <img src='https://assets.bonkerscorner.com/uploads/2021/10/14003242/womencategories_desktopbanner.gif' alt='1st' className='posters' />
                </div>
                <div>
                    <img src='https://assets.bonkerscorner.com/uploads/2021/10/14003240/mensbanner_web.gif' alt='1st' className='posters' />
                </div>
            </Carousel>

            <div className='filter-container'>
                <BsFilterRight className='filter-icon' />
                <Select
                    defaultValue="All Category"
                    style={{
                        width: 130,
                    }}
                    onChange={handleChange}
                    bordered={false}
                    options={[
                        {
                            value: 'All Category',
                            label: 'All Category',
                        },
                        {
                            value: 'Ladies',
                            label: 'Ladies',
                        },
                        {
                            value: 'Men',
                            label: 'Men',
                        },
                        {
                            value: 'Kids',
                            label: 'Kids',
                        },
                    ]}
                />
            </div>

            <Cards />

            <Footer />
        </div>
    );
};

export default Homapage;
