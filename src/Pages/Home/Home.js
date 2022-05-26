import React from 'react';
import Banner from './Banner';
import Highlight from './Highlight';
import Items from './ItemCollection/Items';
import Reviews from './Reviews';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Highlight></Highlight>
            <Tools></Tools>
            <Items></Items>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;