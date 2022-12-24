import React from 'react';
import './homepage.scss';
import { Carousel } from 'antd';
import Cards from '../Cards/cards';

const Homapage = () => {
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

            <Cards />
        </>
    );
};

export default Homapage;
