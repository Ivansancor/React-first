import { useState, useEffect } from 'react';

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCount(prevCount => prevCount + 1), 1000);
        return () => clearInterval(interval)
    }, []);


    return (
        <div className='timer'>{count < 60 ? `Used time: ${count}s` : `Used time: ${Math.floor(count/60)}m ${count % 60}s`}</div>
    )
}