import React, { useEffect, useState } from 'react';
import Item from './Item';
import ItemBanner from './ItemBanner';


const Items = () => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/items')
        .then(res=> res.json())
        .then(data => setItems(data))
    }, []);
    return (
        <div className='flex gap-5 items-center justify-center'>
            <div>
            <ItemBanner></ItemBanner>
        </div>
            <div className='grid grid-cols-1 gap-5'>
            {
                    items?.map(item =><Item
                        key={item._id}
                        item={item}
                        ></Item>)
                }
        </div>
        
        </div>
    );
};

export default Items;