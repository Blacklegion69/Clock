import useTime from '@/hooks/useTime';
import { Card } from '@/components/ui/card';

const DigitalClock = () => {
    const { hour, minute, second } = useTime();

    const data = [
        { name: 'Hour', time: hour },
        { name: 'Minute', time: minute },
        { name: 'Second', time: second },
    ];
    return (
        <div className="w-full min-h-screen flex justify-center items-center flex-col relative p-2">
            <div className="w-full grid grid-cols-3 justify-center items-center relative gap-2">
                {data.map((d, id) => {
                    return (
                        <Card className="rounded" key={id}>
                            <div className="text-center orbitron">{d.time}</div>
                            <div className="text-center text-xs">{d.name}</div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default DigitalClock;
