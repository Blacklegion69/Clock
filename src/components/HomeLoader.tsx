import { useState, useEffect } from 'react';

const HomeLoader = () => {
    const [currentState, setCurrentState] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentState(true);
        }, 1000); // Adjust the duration in milliseconds (1 second in this example)

        return () => clearTimeout(timer);
    }, []);

    if (!currentState) {
        return (
            <div className="w-full flex fixed z-[100] flex-col bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 min-h-screen flex justify-center items-center top-0 left-0 right-0 bottom-0">
                <div className="border-4 animate-spin border-b-slate-900 border-slate-100 rounded-full p-6"></div>
                <div className="mt-10">Loading....</div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default HomeLoader;
