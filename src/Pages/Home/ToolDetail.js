import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useToolDetail from '../Hooks/useToolDetail';

const ToolDetail = () => {
    const { toolId } = useParams();
    const [tool] = useToolDetail(toolId);
    return (
        <div>
            <h1>Tool ID: {toolId}</h1>
        </div>
    );
};

export default ToolDetail;
