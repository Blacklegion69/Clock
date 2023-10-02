const Hours = () => {
    const digits = [
        { one: 12, two: 6 },
        { one: 1, two: 7 },
        { one: 2, two: 8 },
        { one: 3, two: 9 },
        { one: 4, two: 10 },
        { one: 5, two: 11 },
    ];

    return (
        <>
            {digits.map((d, id) => {
                return (
                    <div
                        key={id}
                        style={{ transform: `rotate(${id * 30}deg)` }}
                        className="text-xl h-full flex flex-col justify-between items-center absolute"
                    >
                        <div style={{ transform: `rotate(${id * -30}deg)` }}>
                            {d.one}
                        </div>
                        <div style={{ transform: `rotate(${id * -30}deg)` }}>
                            {d.two}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Hours;
