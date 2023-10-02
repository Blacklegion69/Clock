// import React from "react";
import useTime from '@/hooks/useTime';
import Hours from '@/components/Hours';

type timeProps = {
    day?: number;
    hour: number;
    minute: number;
    second: number;
};

const AnalogClock = () => {
    const { hour, minute, second }: timeProps = useTime();

    const clipPath = { height: 300 };

    const background = (color1: string, color2: string) => {
        return `-webkit-linear-gradient(top,${color1},${color2} 50%,transparent 50%)`;
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center relative">
            <div className="w-[341px] h-[341px] flex justify-center items-center relative p-4 rounded-full border-2 border-slate-900">
                <div
                    className="p-2 absolute clip-polygon"
                    style={{
                        ...clipPath,
                        background: background('#009aff', '#0059ff'),
                        height: 201,
                        transform: `rotate(${hour * 30}deg)`,
                    }}
                    id="hour"
                ></div>
                <div
                    className="p-1 absolute clip-polygon"
                    style={{
                        ...clipPath,
                        background: background('#ff6100', '#951f00'),
                        height: 221,
                        transform: `rotate(${minute * 6}deg)`,
                    }}
                    id="minutes"
                ></div>
                <div
                    className="p-1 absolute clip-polygon"
                    style={{
                        ...clipPath,
                        background: background('#00e1ff', '#0080a1'),
                        transform: `rotate(${second * 6}deg)`,
                    }}
                    id="second"
                ></div>
                <div className="p-2 rounded-full bg-slate-400 z-30"></div>
                {/*digits*/}
                <Hours />
            </div>
        </div>
    );
};

export default AnalogClock;
