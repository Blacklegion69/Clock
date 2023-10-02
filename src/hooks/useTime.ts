import { useState, useEffect } from 'react';

const useTime = () => {
    const [currentTime, setaCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setaCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);

    const day = currentTime.getDay();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    return { day, hour, minute, second };
};

export default useTime;
