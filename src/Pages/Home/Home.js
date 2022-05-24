import React from 'react';
import Banner from './Banner';
import Highlight from './Highlight';
import Items from './ItemCollection/Items';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Highlight></Highlight>
            <Tools></Tools>
            <Items></Items>
            
        </div>
    );
};

export default Home;