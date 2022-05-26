import { useEffect, useState } from "react"

const useToolDetail = toolId => {
    const [tool, setTool] = useState([]);

    useEffect(() => {
        const url = `https://calm-scrubland-52483.herokuapp.com/tools/${toolId}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => setTool(data));
    }, [toolId]);
    return [tool]
}

export default useToolDetail;