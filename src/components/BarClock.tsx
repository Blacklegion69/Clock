import useTime from '@/hooks/useTime';

const BarClock = () => {
    const { hour, minute, second } = useTime();

    return (
        <div className="w-full min-h-screen flex justify-center items-center relative">
            <div className="w-full flex justify-center items-center flex-col relative gap-2">
                <div className="w-full flex justify-center items-center relative">
                    <div className="w-4/5 p-2 overflow-hidden rounded-full bg-slate-200 relative">
                        <div
                            style={{ width: `${hour * 4.18}%` }}
                            className="h-full rounded-full z-30 absolute top-0 left-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                        ></div>
                    </div>
                    <div className="w-[30px] text-center">{hour}</div>
                </div>

                <div className="w-full flex justify-center items-center relative">
                    <div className="w-4/5 p-2 overflow-hidden rounded-full bg-slate-200 relative">
                        <div
                            style={{ width: `${minute * 1.67}%` }}
                            className="h-full rounded-full z-30 absolute top-0 left-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                        ></div>
                    </div>
                    <div className="w-[30px] text-center">{minute}</div>
                </div>

                <div className="w-full flex justify-center items-center relative">
                    <div className="w-4/5 p-2 overflow-hidden rounded-full bg-slate-200 relative">
                        <div
                            style={{ width: `${second * 1.67}%` }}
                            className="h-full rounded-full z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black"
                        ></div>
                    </div>
                    <div className="w-[30px] text-center">{second}</div>
                </div>
            </div>
        </div>
    );
};

export default BarClock;
