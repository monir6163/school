import React from 'react';
import HeadMaster from './HeadMaster/HeadMaster';
import History from './History/History';
import Slide from './Slider/Slide';

const Home = () => {
    return (
        <>
            <Slide />
            <History />
            <HeadMaster />
        </>
    );
};

export default Home;