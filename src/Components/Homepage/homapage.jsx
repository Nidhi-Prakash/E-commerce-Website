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
        <>
            <Carousel autoplay effect="fade" className='carousel-container'>
                <div>
                    <img src='https://image.hm.com/content/dam/ladies_s06/december_2022/1086g/1086G-3x2.jpg?imwidth=768' alt='1st' className='posters' />
                </div>
                <div>
                    <img src='https://image.hm.com/content/dam/men_s06/november_2022/3017a/3017A-3x2.jpg?imwidth=768' alt='1st' className='posters' />
                </div>
                <div>
                    <img src='https://image.hm.com/content/dam/divided_s06/november_2022/5096a/5096A-3x2-candy-coloured-basics.jpg?imwidth=768' alt='1st' className='posters' />
                </div>
                <div>
                    <img src='https://image.hm.com/content/dam/TOOLBOX/LOCAL%20ACTIVITIES/2022_s06/december_2022/KIDS-LNY-08-3X2.jpg?imwidth=768' alt='1st' className='posters' />
                </div>
            </Carousel>

            <div className='filter-container'>
                <BsFilterRight className='filter-icon' />
                <Select
                    defaultValue="Filter here"
                    style={{
                        width: 130,
                    }}
                    onChange={handleChange}
                    bordered={false}
                    options={[
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
        </>
    );
};

export default Homapage;
