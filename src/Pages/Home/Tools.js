import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/tools')
        .then(res=> res.json())
        .then(data => setTools(data))
    }, []);

    return (
        <div className='lg:m-16 lg:py-10'>
           <h1 className='text-3xl font-bold pb-10'>Hot Deals</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools?.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                        ></Tool>)
                }
            </div> 
        </div>
    );
};

export default Tools;