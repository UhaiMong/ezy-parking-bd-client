import React from 'react';
import Spinner from '../Shared/Spinner/Spinner';
import DatePicker from './Home/DatePicker/DatePicker';
import HeroSlider from './Home/HeroSlider/HeroSlider';

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <DatePicker></DatePicker>
            <Spinner/>
        </div>
    );
};

export default Home;